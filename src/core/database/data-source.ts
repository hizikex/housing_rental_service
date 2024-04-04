import "reflect-metadata";
import { User } from "../../entity/User";
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
    entities: [User],
    migrations: ["../migration/*.ts"],
    subscribers: []
});
