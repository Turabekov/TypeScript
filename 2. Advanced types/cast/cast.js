"use strict";
let num = 5;
let str = a.toString();
let e = new String(num).valueOf();
let f = new Boolean(num).valueOf();
let str2 = "sdfdf";
let num2 = parseInt(c);
const userA = {
    name: "Vasya",
    email: "vassiliy@yandex.ru",
    login: "vasia",
};
const admin = Object.assign(Object.assign({}, userA), { role: 1 });
//  function mapping
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1,
    };
}
