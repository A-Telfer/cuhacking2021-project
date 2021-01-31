from flask import Flask, send_from_directory
app = Flask(__name__)

UPLOAD_DIRECTORY='/data/'

@app.route('/')
def hello():
    return "hello!"

@app.route('/start_sensor')
def start_sensor():
    return "This should start the sensor..."

@app.route('/stop_sensor')
def stop_sensor():
    return "This should stop 🛑 the sensor..."

@app.route("/dl_file")
def get_file():
    """Download a file."""
    return send_from_directory(UPLOAD_DIRECTORY, 'last.mp4', as_attachment=True)

if __name__=='__main__':
    app.run()