from flask import Flask , render_template 

app = Flask(__name__)
@app.route('/')
def hello_world():
    return render_template('index.html')
    
@app.route('/<num>')
def num(num):
    return render_template('index2.html', _num = int(num))

@app.route('/<numx>/<numy>')
def numxy(numx , numy):
    return render_template('index3.html', _numx = int(numx), _numy = int(numy))

@app.route('/<numx>/<numy>/<color>/<color2>')
def numxy_color(numx , numy, color, color2):
    return render_template('index4.html', _numx = int(numx), _numy = int(numy), _color=color, _color2 = color2)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.