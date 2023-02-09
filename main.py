from flask import Flask, render_template, request
app = Flask(__name__)

m = [
    ".", ".", ".",
    ".", ".", ".",
    ".", ".", ".",
]
p = 0

@app.route("/")
def hello_world():
    return render_template("view.html")


@app.route("/potez", methods=['GET', 'POST'])
def potez():
    global m, p
    data = int(request.form['button'])

    if m[data] == ".":
        if p % 2 == 0:
            m[data] = "x"
        else:
            m[data] = "o"
        p += 1
        if (r := is_game_end()) is not None:
            return r
    return str(m)


def is_game_end():
    # if m[0] == m[1] == m[2] != ".":
    if m[0] == m[1] and m[1] == m[2] and m[2] != ".":
        return m[0]

    ct = 0
    for x in m:
        if x == ".":
            ct += 1
    if ct == 0:
        return "draw"

    return None



