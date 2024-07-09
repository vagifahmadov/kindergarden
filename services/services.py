from setting.config import request, Blueprint, jsonify, make_response, render_template, jwt, JWTManager, create_access_token, url_for, sha256
# from setting.db import mongo, apps, mssql
from objects.defs import *


# pages
index = Blueprint('/', __name__)

@index.route('/', methods=['GET'])
def index_func():
    return render_template("index.html")


contact = Blueprint('contact', __name__)

@contact.route('/contact', methods=['GET'])
def contact_func():
    return render_template("/html/contact.html")


vacancy = Blueprint('vacancy', __name__)

@vacancy.route('/vacancy', methods=['GET'])
def vacancy_func():
    return render_template("/html/isElanlari.html")


kinder_gardens = Blueprint('kindergardens', __name__)

@kinder_gardens.route('/kindergardens', methods=['GET'])
def kinder_gardens_func():
    return render_template("/html/kindergardens.html")


services = Blueprint('services', __name__)

@services.route('/services', methods=['GET'])
def services_func():
    return render_template("index.html")


# services

insert_data = Blueprint('insertData', __name__)

@insert_data.route('/insertData', methods=['POST'])
def insert_data_func():
    data_request = request.json
    key_list = list(data_request.keys())
    query_schema = []
    return jsonify({'data': "ok"})
