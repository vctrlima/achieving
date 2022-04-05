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
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "post",
    route: "/users/sign-up",
    controller: UserController,
    action: "signUp"
}, {
    method: "post",
    route: "/users/sign-in",
    controller: UserController,
    action: "signIn"
}]
