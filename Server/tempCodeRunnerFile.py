from flask import Flask, request, jsonify
import subprocess  # To execute Jupyter Notebook
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return  'Flask server is running!'

@app.route('/predict', methods=['get'])
def predict():
    # return '/predict'
    data = request.get_json()
    symbol = data.get('symbol')
    print(data)

    # Execute Jupyter Notebook to get prediction (replace with your actual execution method)
    process = subprocess.Popen(['jupyter', 'nbconvert', '--execute', '--to', 'python', 'stockpredict.ipynb'])
    process.wait()

    # Read prediction data and image path from notebook output (replace with parsing logic)
    # with open("prediction_output.txt", "r") as f:
    #     predicted_price = float(f.readline())
    # image_path = "prediction_plot.png"

    return jsonify({'image': 'prediction_plot.png'})

if __name__ == '__main__':
    app.run(debug=True, port=3001)
