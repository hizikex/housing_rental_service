import dotenv from 'dotenv';
dotenv.config();

export const settings = {
    app_port: process.env.APP_PORT,
    node_env: process.env.NODE_ENV,
    application_logs: process.env.SHOW_APPLICATION_LOGS,
    mysql: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.DATABASE
    }

}