from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello():
    return "hello!"

@app.route('/start_sensor')
def start_sensor():
    return "This should start the sensor..."

@app.route('/stop_sensor')
def stop_sensor():
    return "This should stop 🛑 the sensor..."

if __name__=='__main__':
    app.run()
