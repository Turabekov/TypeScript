"use strict";
const userB = {
    name: "Vasya",
    email: "vassiliy@yandex.ru",
    login: "vasia",
};
function isString(x) {
    return typeof id === "string";
}
function logId(id) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isAdmin(user) {
    return "role" in user;
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error("User not Admin");
    }
}
