from flask import Flask, jsonify, send_from_directory
import os, json

app = Flask(__name__, static_folder='../frontend', static_url_path='')

@app.route('/api/data')
def api_data():
    db_path = os.path.join(os.path.dirname(__file__), 'db.json')
    with open(db_path) as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/')
def root():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
