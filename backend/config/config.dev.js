const config = {};
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'trains';
config.serverPort = process.env.serverPort || 8081;

export default config;
