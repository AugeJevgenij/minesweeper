from flask import Flask
from app.config import Config


def create_app(config_class=Config):

    app = Flask(__name__)
    app.config.from_object(config_class)

    with app.app_context():

        from app.main import bp as main_bp
        from app.minesweeper import bp as minesweeper_bp

        app.register_blueprint(main_bp)
        app.register_blueprint(minesweeper_bp, url_prefix="/minesweeper")

        return app
