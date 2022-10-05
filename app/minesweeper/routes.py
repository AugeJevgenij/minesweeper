from flask import render_template
from app.minesweeper import bp


@bp.route("/game")
def game():
    return render_template("minesweeper/game.html", title="Minesweeper")
