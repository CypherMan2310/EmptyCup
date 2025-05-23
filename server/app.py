from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)

# Route for the HTML frontend
@app.route('/')
def index():
    return render_template('index.html')  # assumes your HTML is in the "templates" folder

# API route to serve listings data dynamically
@app.route('/api/listings')
def get_listings():
    json_path = os.path.join(app.root_path, 'static', 'data.json')
    with open(json_path) as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
