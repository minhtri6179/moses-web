from flask import Flask, render_template, request, redirect, url_for, jsonify
from translate import v2e, e2v
app = Flask(__name__)


@app.route("/")
def main():
    return redirect(url_for('en2vi'))


@app.route("/en2vi")
def en2vi():
    return render_template('en2vi.html')


@app.route("/vi2en")
def vi2en():
    return render_template('vi2en.html')


@app.route('/translate', methods=['POST'])
def translate_():
    # POST request
    if request.method == 'POST':
        respone = request.get_json()['data'][3:]
        input_sentence = respone

        flag = request.get_json()['data'][:3]
        if 'en' in flag:
            result = e2v(input_sentence)
        else:
            result = v2e(input_sentence)
        final_sentences = {"data": result}
        print(final_sentences)
        return jsonify(final_sentences)



if __name__ == '__main__':
    app.run(port=8000, host="0.0.0.0")
