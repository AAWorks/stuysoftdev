# Clyde 'Thluffy' Sinclair
# SoftDev
# Oct 2021

import occupations
from flask import Flask, render_template
app = Flask(__name__)

coll = occupations.init()

@app.route("/occupyflaskst")
def test_tmplt():
    return render_template('tablified.html', 
        foo="Occupations", 
        header = "Data Covering Various Occupations and their Respective Percentages", 
        names = "Gitsters | Alejandro Alonso, Ivan Lam",
        collection=coll)

if __name__ == "__main__":
    app.debug = True
    app.run()
