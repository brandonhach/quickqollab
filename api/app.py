from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os 
from api.routes import auth_route
from routes import canvas_route as cr, dashboard_route as dr
from routes.test import test_route as test
from flask_cors import CORS
from models.Client import db   
from models.Chat import socketio 

load_dotenv()
app = Flask(__name__, template_folder='views')

# Postgres Local DB
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{os.getenv("DB_USER")}:{os.getenv("DB_PASS")}@{os.getenv("DB_HOST")}:{os.getenv("DB_PORT")}/{os.getenv("DB_NAME")}'

# Register Blueprints
app.register_blueprint(cr.canvas_blueprint, url_prefix='/canvas')
app.register_blueprint(dr.dashboard_blueprint, url_prefix='/dashboard')
app.register_blueprint(auth_route.auth_blueprint, url_prefix='/auth')

# Tests
app.register_blueprint(test.test_blueprint)

# Setup
db.init_app(app)
CORS(app)
socketio.init_app(app, cors_allowed_origins="*")

if __name__ == '__main__':
    socketio.run(app, debug=True)
