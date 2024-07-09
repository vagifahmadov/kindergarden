from setting.config import *
# from setting.db import mongo, mssql, con_mssql, mysql, con_mysql
import random


def current_full_str_date():
    return strftime("%d.%m.%Y %H:%M:%S", localtime())


def current_str_date():
    today = date.today()
    return today.strftime("%d.%m.%Y")


def current_str_time():
    format_time = "%H:%M"
    return datetime.now().time().strftime(format_time)


def current_full_obj_date():
    full_format_date = "%d.%m.%Y %H:%M:%S"
    return datetime.today().strptime(current_full_str_date(), full_format_date)

