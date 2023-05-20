from flask import Flask , render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html" , name = "sahith")
app.run(host='127.0.0.1', port=3002 , debug=True)