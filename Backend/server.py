from flask import Flask

from flask_cors import CORS


app = Flask(__name__)

cors = CORS(app)

@app.route('/predict')
def predict():
    print('done')
    return {'members':[1,2,3,4]}

if __name__ == "__main__":
    print('app is running')
    app.run(debug=True)