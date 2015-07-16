var config = {};

config.db = {
    host: '127.0.0.1',
    port: 27017,
    dbname: 'Coconut',
    pass: 123,
    user: 'root'
};

config.route = {
    get_userinfo_all: 0,
    get_userinfo: 0,
    get_userinfo_basic: 0,
    login: 1
};

module.exports = config;