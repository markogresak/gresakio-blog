var path = require('path'),
  mail = require('./configs/mail.json') || {};

module.exports = {
  production: {
    url: 'https://gresak.io/blog',
    mail: mail,
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost.db')
      },
      debug: false
    },
    server: {
      host: '127.0.0.1',
      port: '2368'
    },
    forceAdminSSL: true
  },
  development: {
    url: 'http://localhost:2368',
    mail: mail,
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost-dev.db')
      },
      debug: false
    },
    server: {
      host: '127.0.0.1',
      port: '2368'
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  },
  testing: {
    url: 'http://127.0.0.1:2369',
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost-test.db')
      }
    },
    server: {
      host: '127.0.0.1',
      port: '2369'
    },
    logging: false
  },
  'testing-mysql': {
    url: 'http://127.0.0.1:2369',
    database: {
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'ghost_testing',
        charset: 'utf8'
      }
    },
    server: {
      host: '127.0.0.1',
      port: '2369'
    },
    logging: false
  },
  'testing-pg': {
    url: 'http://127.0.0.1:2369',
    database: {
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '',
        database: 'ghost_testing',
        charset: 'utf8'
      }
    },
    server: {
      host: '127.0.0.1',
      port: '2369'
    },
    logging: false
  }
};
