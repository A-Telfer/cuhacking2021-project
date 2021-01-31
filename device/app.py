import os
import subprocess
import signal

from flask import Flask

app = Flask(__name__)

ffmpeg_process = None

@app.route('/')
def hello():
    return "hello!"

@app.route('/start_sensor')
def start_sensor():
    # Don't start multiple recordings
    if ffmpeg_process and ffmpeg_process.poll():
        return 

    ffmpeg_process = subprocess.Popen(['ffmpeg -f v4l2 -framerate 25 -video_size 640x480 -i /dev/video0 output.mkv', '-l'])

    return "This should start the sensor..."

    

@app.route('/stop_sensor')
def stop_sensor():
    if ffmpeg_process and ffmpeg_process.poll():
        os.killpg(os.getpgid(ffmpeg_process.pid), signal.SIGTERM)

    return "This should stop 🛑 the sensor..."

if __name__=='__main__':
    app.run()
