import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "get"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "getById"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "insert"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}]
