from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

m = None
p = None
xw = 0
ow = 0
dr = 0


def reset():
    global m, p
    m = [
        ".", ".", ".",
        ".", ".", ".",
        ".", ".", ".",
    ]
    p = 0


@app.route("/")
def hello_world():
    reset()
    return render_template("view.html")


@app.route("/potez", methods=['GET', 'POST'])
def potez():
    global m, p, xw, ow, dr
    data = int(request.form['button'])
    if m[data] == ".":
        if p % 2 == 0:
            m[data] = "x"
        else:
            m[data] = "o"
        p += 1
    winner = check_winner()
    if winner == "x":
        xw += 1
    elif winner == "o":
        ow += 1
    elif winner == "draw":
        dr += 1

    resp = {
        "model": m,
        "winner": check_winner(),
        "xw": xw,
        "ow": ow,
        "dr": dr,
    }
    return jsonify(resp)


def check_winner():
    global m, p
    if m[0] == m[1] == m[2] != ".":
        return m[0]
    if m[3] == m[4] == m[5] != ".":
        return m[0]
    if m[6] == m[7] == m[8] != ".":
        return m[0]
    if m[0] == m[3] == m[6] != ".":
        return m[0]
    if m[1] == m[4] == m[7] != ".":
        return m[0]
    if m[2] == m[5] == m[8] != ".":
        return m[0]
    if m[0] == m[4] == m[8] != ".":
        return m[0]
    if m[2] == m[4] == m[6] != ".":
        return m[0]
    ct = 0
    for x in m:
        if x == ".":
            ct += 1
    if ct == 0:
        return "draw"

    return None




