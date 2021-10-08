# Clyde 'Thluffy' Sinclair
# SoftDev
# Oct 2021

import occupations
from flask import Flask, render_template
app = Flask(__name__)

coll = occupations.init()

@app.route("/occupyflaskst")
def test_tmplt():
    return render_template( 'tablified.html', foo="Occupations", collection=coll)

if __name__ == "__main__":
    app.debug = True
    app.run()
