import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 6603,

    username: "root",
    password: "TO%Krp%UtVqE",
    database: "achieving",

    synchronize: true,
    logging: false,

    entities: [
        User,
    ],
});
