from flask import Flask,request,flash,jsonify
from flask-cors import cors
import mysql.connector

app = Flask(__name__)

dbconfigure = {
    'host':'localhost',
    'user':'root',
    'password':'root123',
    'database':'maindb'   
}

def getdbcon():
    return mysql.connector.connect(**dbconfigure)

@app.route('/register',method=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    connection = getdbcon()
    cursor = connection.cursor(dictionary=True)
    cursor.execute('SELECT * FROM userdet WHERE username ='+username)
    user = cursor.fetchone()

    if user:
        flash("username already exist",'danger')
        cursor.close()
        connection.close()
        return jsonify({'message':'username already exist'})
    
    cursor.execute('INSERT INTO userdet (username,password) VALUES ('+username+','+password+')')
    connection.commit()
    cursor.close()
    connection.close()

    flash("Registered successfully")
    return jsonify({'message':'registeres successfully'})

@app.route('/login',method=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    connection = getdbcon()
    cursor = connection.cursor(dictionary=True)
    cursor.execute('SELECT * FROM userdet WHERE username ='+username)
    user = cursor.fetchone()
    cursor.close()
    connection.close()

    if user and (password == user['password']):
        flash('Login successfully','success')
        return jsonify({'message':'login success'})

    flash('Invalid username or password')
    return jsonify({'message':'invalid user or pass'})

@app.route('/placeorder',method=['POST'])
def placeorder():
    data = request.get_json()
    products = data.get('products')
    price = data.get('price')

    connection = getdbcon()
    cursor = connection.cursor(dictionary=True)
    for i in range(len(products))
        cursor.execute('INSERT INTO orders (product,price) VALUES ('+products[i]+','+price[i]+')')
        
    user = cursor.fetchone()
    cursor.close()
    connection.close()


if(__name__ == "__main__"):
    app.run()