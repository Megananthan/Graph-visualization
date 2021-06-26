from flask import Flask, render_template, url_for,request


app=Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/construct')
def construct():
    url1="<div class='iframe'><iframe src='https://www.glowscript.org/#/user/megananthan/folder/MyPrograms/program/CaseStudy' frameBorder='0'></iframe></div>"
    return render_template('portfolio.html',url=url1)


if __name__=="__main__":
    app.run(debug=True)
