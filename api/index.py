from flask import Flask, request
import cadquery as cq

app = Flask(__name__)


@app.route('/api/hello', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'GET':
        return "Hello World!"


if __name__ == '__main__':
    app.run(port=5328)
