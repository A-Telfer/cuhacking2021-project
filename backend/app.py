from flask import Flask, send_from_directory
import requests

app = Flask(__name__)

UPLOAD_DIRECTORY='/data/'

@app.route('/')
def hello():
    return "hello!"

@app.route('/start_sensor')
def start_sensor():
    resp = requests.get('http://104.154.240.223:5000/start_sensor')
    return f"This should start the sensor... {resp.status_code}"

@app.route('/stop_sensor')
def stop_sensor():
    resp = requests.get('http://104.154.240.223:5000/stop_sensor')
    return f"This should stop 🛑 the sensor... {resp.status_code}"

@app.route("/dl_file")
def get_file():
    """Download a file."""
    return send_from_directory(UPLOAD_DIRECTORY, 'last.mp4', as_attachment=True)

if __name__=='__main__':
    app.run()