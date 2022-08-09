from flask import Flask

app = Flask(__name__)

# Homepage API Route
@app.route("/home")
def homepage():
    return {"news": ["Article1", "Article2", "Article3"]}

if __name__ == "__main__":
    app.run(debug=True)
