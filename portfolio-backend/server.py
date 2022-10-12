# venv\Scripts\activate && flask --app server --debug run

from backend import create_app

app = create_app()

if __name__ == "__name__":
    app.run(debug=True)