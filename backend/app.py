import requests

from flask import Flask
app = Flask(__name__)


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

if __name__=='__main__':
    app.run()
