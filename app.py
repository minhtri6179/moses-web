from flask import Flask, render_template, request, redirect, url_for, jsonify
from translate import vi2en
app = Flask(__name__)
 
                                                    
@app.route("/")
def a():
    return render_template('main.html')

@app.route('/test', methods=['GET', 'POST'])
def testfn():
    # GET request
    if request.method == 'GET':
        message = {'greeting':'Hello from Flask!'}
        return jsonify(message)  # serialize and use JSON headers
    # POST request
    if request.method == 'POST':
        vi = request.get_json()['greeting']  # parse as JSON
        en = vi2en(vi)
        return jsonify(en)
        return 'Sucesss', 200


if __name__ == '__main__':
    app.run()
