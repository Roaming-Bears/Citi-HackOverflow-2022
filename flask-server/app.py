from flask import Flask, jsonify
import json

app = Flask(__name__)


@app.route("/clients", methods=['GET'])
def clients():
    return jsonify({
        "data": json.load(open('clients_data.json'))
    }), 200


@app.route("/managers", methods=['GET'])
def managers():
    return jsonify({
        "data": json.load(open('managers_data.json'))
    }), 200


if __name__ == "__main__":
    app.run(debug=True)
