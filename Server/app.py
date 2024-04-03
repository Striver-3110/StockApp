from flask import Flask, request, jsonify
import subprocess  # To execute Jupyter Notebook
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


@app.route("/")
def index():
    return "Flask server is running!"


@app.route("/predict", methods=["GET", "POST"])  # Change to POST method
def predict():
    if request.method == "GET":
        try:
            data = request.get_json()  # Assuming client sends JSON
            if data is None:
                return jsonify({"error": "No data provided in request"}), 400

            symbol = data.get("symbol")
            print(data)
            # ... rest of your prediction logic using symbol ...

        except Exception as e:
            return jsonify({"error": f"An error occurred: {str(e)}"}), 500
    else:
        return "Failed"


# @app.route('/predict', methods=['GET'])
# def predict():
#     try:
#         data = request.get_json()
#         symbol = data.get('symbol')
#         print(data)
#         # Execute Jupyter Notebook to get prediction (replace with your actual execution method)
#         process = subprocess.Popen(['jupyter', 'nbconvert', '--execute', '--to', 'python', 'stockpredict.ipynb'])
#         process.wait()

#         # Read prediction data and image path from notebook output (replace with parsing logic)
#         with open("prediction_output.txt", "r") as f:
#             predicted_price = float(f.readline())
#         image_path = "prediction_plot.png"

#         return jsonify({'image': 'prediction_plot.png'})
#     except Exception as e:
#         return jsonify({'error': f'An error occurred: {str(e)}'}), 500

if __name__ == "__main__":
    app.run(debug=True, port=3001)


# from flask import Flask, request, jsonify
# import subprocess  # To execute Jupyter Notebook
# from flask_cors import CORS

# app = Flask(__name__)
# cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# @app.route('/')
# def index():
#     return  'Flask server is running!'

# def temp():
#     try:
#         data = request.get_json()
#         symbol = data.get('symbol')
#         print(data)

#         # Execute Jupyter Notebook to get prediction (replace with your actual execution method)
#         process = subprocess.Popen(['jupyter', 'nbconvert', '--execute', '--to', 'python', 'stockpredict.ipynb'])
#         process.wait()

#         # Read prediction data and image path from notebook output (replace with parsing logic)
#         with open("prediction_output.txt", "r") as f:
#             predicted_price = float(f.readline())
#         image_path = "prediction_plot.png"

#         return jsonify({'image': 'prediction_plot.png'})
#     except Exception as e:
#         return jsonify({'error': f'An error occurred: {str(e)}'}), 500


# @app.post('/predict')
# def predict():
#     # return temp()
#     return 'rerawfdas'
#     # try:
#     #     symbol = request.args.get('symbol')
#     #     if symbol:
#     #         # Here, you can use the symbol to generate the prediction
#     #         # For demonstration purposes, let's just return the symbol
#     #         return jsonify({'prediction': f'Predicted for {symbol}'})
#     #     else:
#     #         return jsonify({'error': 'Symbol not provided in the request'}), 400
#     # except Exception as e:
#     #     return jsonify({'error': f'An error occurred: {str(e)}'}), 500


#     # return '/predict'

# if __name__ == '__main__':
#     app.run(debug=True, port=3001)
