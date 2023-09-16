from flask import Flask, request
import os
# import cadquery as cq

app = Flask(__name__)

# @app.route('/api/hello', methods=['GET', 'POST'])


@app.route('/api/hello')
def hello_world():
    return 'Hello from Flask and Docker!'
    # if request.method == 'GET':
    # return "Hello World!"


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5328))
    app.run(debug=True, host='0.0.0.0', port=port)
