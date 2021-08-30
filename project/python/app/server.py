from flask import Flask, request, jsonify, current_app
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token, create_refresh_token,
    get_jwt_identity, get_jwt
)
from datetime import datetime, timedelta, timezone
import jwt

from werkzeug.wrappers import response
import json

from flask_jwt_extended.utils import set_access_cookies

from app import app
from app.utils import init_routing_func, check_request_data, check_login_credentials
from app.obj_utils import get_objs, get_objs_with_filter, create_obj
from database.tables import User, Game, TopScore, UserGame

memory_api, get, post = init_routing_func('memory_api', '/wmsdemo/')

@get('/games')
@jwt_required()
def getGames():
    games=get_objs(Game, relations=True)
    return jsonify(games),200

@get('/users')
def getUsers():
    users=get_objs(User, relations=True)
    return jsonify(users),200

@get('/topscores')
@jwt_required()
def getTopscores():
    topscores=get_objs(TopScore, relations=True)
    return jsonify(topscores)

@get('/topscores/game/<int:game_id>')
@jwt_required()
def getTopscoresGame(game_id):
    topscores=get_objs_with_filter(TopScore, relations=True, game_id=game_id)
    return jsonify(topscores)

@post('/topscore')
@jwt_required()
def postTopScore():
    data = request.json
    message, response_code = check_request_data(data, ["game_id", "user_id", "score"])
    if (response_code == 200):
        newTopscore = create_obj(TopScore, data)
        message = jsonify(newTopscore.to_dict())
    return message, response_code

@post('/user')
def saveUser():
    data = request.json
    message, response_code = check_request_data(data, ["user_name", "password", "user_age"])
    if (response_code == 200):
        newUser = create_obj(User, data)
        message = jsonify(newUser.to_dict())
    return message, response_code

@post('/login')
def login():
    usr = request.json['user']
    pwd = request.json['password']
    usr_id = check_login_credentials(usr, pwd)
    if(usr_id > -1):
        token = create_access_token(identity=usr_id)
        response = jsonify({'user_id':usr_id, 'expiresIn':current_app.config['JWT_ACCESS_TOKEN_EXPIRES'].seconds, 'token': token})
        # set_access_cookies(response, token)

        return response, 200
    else:
        return jsonify({'error': 'incorrect credentials'}), 401


    