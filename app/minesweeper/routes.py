import json

from flask import render_template
from app.minesweeper import bp


@bp.route("/game")
def game():
    return render_template("minesweeper/game.html", title="Minesweeper")


@bp.route("/new_game")
def new_game():

    width = 10
    height = 10

    game = []
    for i in range(width):
        row = [0] * height
        game.append(row)

    return json.dumps(game)
