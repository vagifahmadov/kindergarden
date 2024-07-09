from setting.config import apps
from services.services import index, contact, vacancy, kinder_gardens, services, insert_data

# pages
apps.register_blueprint(index)
apps.register_blueprint(contact)
apps.register_blueprint(vacancy)
apps.register_blueprint(services)
apps.register_blueprint(kinder_gardens)
# services
apps.register_blueprint(insert_data)

if __name__ == '__main__':
    apps.run(debug=True, port=1985, host='localhost')


