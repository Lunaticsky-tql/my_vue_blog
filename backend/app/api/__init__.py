from flask import Blueprint


bp = Blueprint('api', __name__)


from app.api import ping, tokens, errors, users, posts, comments
