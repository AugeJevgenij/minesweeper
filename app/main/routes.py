from flask import render_template
from app.main import bp


@bp.route("/")
@bp.route("/home")
def home():
    return render_template("main/home.html", title="Home")
