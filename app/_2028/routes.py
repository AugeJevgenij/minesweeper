import json

from flask import render_template
from app._2028 import bp


@bp.route("/game")
def game():
    return render_template("_2028/game.html", title="2028")
