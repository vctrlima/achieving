import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,

    username: "root",
    password: "8/n&d*NHKypf!8zG",
    database: "achieving",

    synchronize: true,
    logging: false,

    entities: [
        User,
    ],
});
