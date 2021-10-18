"""
Waahoos: Alejandro Alonso, Ivan Mijacika, William Chen
SoftDev
K14 -- Form and Function
2021-10-14
"""

from flask import Flask, render_template, request, session         #facilitate form submission

#the conventional way:
#from flask import Flask, render_template, request

app = Flask(__name__)    #create Flask object

username = waahoos
password = aaimwc

def checkuser(user, pwd):


@app.route("/") #, methods=['GET', 'POST'])
def disp_loginpage():
    """
    create the basic login page
    """

    if session['email']:

    return render_template( 'login.html')


@app.route("/auth") # , methods=['GET', 'POST'])
def authenticate():
    """
    generate and fill out the response page using flask vars
    """
    if app.debug:
        print("\n\n\n")
        print("***DIAG: this Flask obj ***")
        print(app)
        print("***DIAG: request obj ***")
        print(request)
        print("***DIAG: request.args ***")
        print(request.args)

    try:
        if username==request.args.get("username"):
            if password==request.args.get("password"):
                return render_template('response.html', username=request.args.get('username'))  #response to a correct form submission
            else:
                return render_template('error.html', error_message="")  #response to an incorrect password submission
        else:
            return render_template('error.html', error_message="")  #response to an incorrect username submission
    except:
        return render_template('error.html', error_message="")  #response to a broken submission


    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
