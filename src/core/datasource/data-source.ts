import "reflect-metadata";
import { DataSource } from "typeorm";
import { settings } from "../config/application";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: settings.mysql.host,
    port: Number(settings.mysql.port || '3306'),
    username: settings.mysql.username,
    password: settings.mysql.password,
    database: settings.mysql.database,
    synchronize: true,
    logging: true,
    entities: ["../entity/**/*.ts"],
    migrations: ["../migrations/*.ts"],
    subscribers: []
});
