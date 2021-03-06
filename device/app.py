import os
import subprocess
import signal

from flask import Flask

app = Flask(__name__, static_url_path='', static_folder='')

ffmpeg_process = None

@app.route('/')
def hello():
    return "hello!"

@app.route('/start_sensor')
def start_sensor():
    global ffmpeg_process

    # Don't start multiple recordings
    if ffmpeg_process and not ffmpeg_process.poll():
        return 

    ffmpeg_process = subprocess.Popen('ffmpeg -y -f v4l2 -framerate 25 -video_size 640x480 -i /dev/video0 output.mkv'.split(' '), shell=False)

    return "This should start the sensor..."


@app.route('/stop_sensor')
def stop_sensor():
    global ffmpeg_process 

    if ffmpeg_process and not ffmpeg_process.poll():
        os.kill(ffmpeg_process.pid, 2)
        ffmpeg_process.wait()

    return "This should stop 🛑 the sensor..."

@app.route('/download')
def download():
    global ffmpeg_process 

    # do not serve file when recording
    if ffmpeg_process and not ffmpeg_process.poll():
        os.kill(ffmpeg_process.pid, 2)
        ffmpeg_process.wait()
        return "FFmpeg is still recording!", 500

    if not os.path.exists('output.mkv'):
        return "No recording found!", 404

    return app.send_static_file('output.mkv')

if __name__=='__main__':
    app.run()
