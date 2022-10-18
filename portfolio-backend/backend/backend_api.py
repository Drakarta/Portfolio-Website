from flask import Blueprint

backend_api = Blueprint("backend_api", __name__)

@backend_api.route("/about", methods=["GET", "POST"])
def index():
    return {
        "Text": "Job Stevasdasdasdasdens 123"}
