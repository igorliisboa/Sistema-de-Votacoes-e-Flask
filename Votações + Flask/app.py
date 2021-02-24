from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/sistema.html")
def votacao():
    return render_template("sistema.html")

if __name__ == "__main__":
    app.run()