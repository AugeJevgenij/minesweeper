from flask import Blueprint

bp = Blueprint("minesweeper", __name__)

from app.minesweeper import routes