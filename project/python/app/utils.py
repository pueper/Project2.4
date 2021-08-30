from functools import partial
from flask import json, jsonify
from app.obj_utils import get_objs
from database.tables import User, TopScore

from app.authorization import AuthBlueprint

def init_routing_func(name, url_prefix):
    route = AuthBlueprint(name, __name__, url_prefix=url_prefix)
    get = partial(route.route, methods=["GET"])
    post = partial(route.route, methods=["POST"])
    return route, get, post

def check_request_data(data, items):
    message = None
    response_code = 200
    if data is None:
        message = jsonify({'error':'no json data was detected'})
        response_code = 400
    else:
        for item in items:
            if item not in data.keys() or data[item] is None:
                message =  jsonify({'error':'no ' + item + ' provided'})
                response_code = 400
    return message, response_code

def check_login_credentials(usr, pwd):
    for user in get_objs(User):
        if(user['name'] == usr and user['password'] == pwd):
             return user['id']
    return -1

def score_sorter(topscore):
    return topscore['score']

def sort_scores(topscores):
    topscores.sort(key=score_sorter)
    if(len(topscores)>5):
        topscoreLijst = topscores[:5]
        andereScores = topscores[5:]
        return topscoreLijst, andereScores
    return topscores, False

