from flask import Flask , render_template 

app = Flask(__name__)
@app.route('/')
def hello_world():
    return 'Hello World!' 
    
@app.route('/play')
def play():
    return render_template('level1.html')

@app.route('/play/<num>')
def num(num):
    return render_template('level2.html', _num = int(num))

@app.route('/play/<num>/<color>')
def color(num, color):
    return render_template('level3.html', _num = int(num), _color = color)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.