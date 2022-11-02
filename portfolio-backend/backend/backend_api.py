from flask import Blueprint, jsonify

backend_api = Blueprint("backend_api", __name__)

@backend_api.route("/about", methods=["GET", "POST"])
def about():
    return {
        "Text": "Hello, \n\n&nbsp;\n\n my name is Anthony, \n\n I'm currently a first year IT student at the [Hogeschool Utrecht](https://www.hu.nl/). \n\n&nbsp;\n\n I'm a very creative person that likes making things, might it be websites, games or apps, \n\n&nbsp;\n\n next to that I love problem solving and making things more efficient, \n\n&nbsp;\n\n Thank you for taking your time to look at my website and I hope to see us working together!"
    }

@backend_api.route("/project", methods=["GET", "POST"])
def project():
    return {
        "projects": [
            {
            "name": "Portfolio Website",
            "link": "https://discord.com",
            "image": "src/assets/images/puma/20210425_221537.jpg"
        },
        {
            "name": "Kapper Project",
            "link": "https://discord.com",
            "image": "src/assets/images/puma/20210720_141155.jpg"
        },
        {
            "name": "Future Projects",
            "link": "https://discord.com",
            "image": "src/assets/images/puma/20210812_180613.jpg"
        },
        {
            "name": "Project 4",
            "link": "https://discord.com",
            "image": "src/assets/images/puma/20210425_221537.jpg"
        }
        ]
    }