from flask import Flask,request,flash,jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

user_login = {"logined":False,"user":"","pass":"","id":0}
def get_db_connection():
    return mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="",
    database="project",
)

def register(user,passs):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * from userdetails")
    table = cursor.fetchall()
    for i in table:
        if(user == i[1]):
            print("Username already taken!")
            return False
    cursor.execute("INSERT INTO userdetails(`username`,`password`) VALUES(%s , %s )",(user,passs))
    connection.commit()
    return True


def login(username,password):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * from userdetails")
    table = cursor.fetchall()

    validrnot = checkuserdet(username,password,table)
    if(validrnot):
        return True
    else:
        return False



def checkuserdet(username,password,table):
    validity = False
    for i in table:
        if(username == i[1]):
            if(password == i[2]):
                user_login["logined"] = True
                user_login["user"] = i[1]
                user_login["pass"] = i[2]
                user_login["id"] = i[0]
                validity = True
    
    return validity

def logout():
    user_login["logined"] = False
    user_login["user"] = ""
    user_login["pass"] = ""
    user_login["id"] = 0

@app.route('/login')
def loginfunc():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    res = login(username,password)
    if(res):
        flash("Login Successfully")
        return jsonify({'res':'Login successfully'})
    else:
        return jsonify({'res':'Login failed'})


@app.route('/register')
def registerfunc():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    res = register(username,password)
    if(res):
        return jsonify({'res':'register successfully'})
    else:
        return jsonify({'res':'register failed'})
        

if __name__ == '__main__':
    app.run(debug=100)

