from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    cors = CORS(app)

    from .backend_api import backend_api

    app.register_blueprint(backend_api, url_prefix="/api")

    return app
