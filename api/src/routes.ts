import { UserController } from "./controller/UserController"

export const Routes = [{
  method: "get",
  route: "/api/users",
  controller: UserController,
  action: "get"
}, {
  method: "get",
  route: "/api/users/:id",
  controller: UserController,
  action: "getById"
}, {
  method: "delete",
  route: "/api/users/:id",
  controller: UserController,
  action: "remove"
}, {
  method: "post",
  route: "/api/users/sign-up",
  controller: UserController,
  action: "signUp"
}, {
  method: "post",
  route: "/api/users/sign-in",
  controller: UserController,
  action: "signIn"
}]
