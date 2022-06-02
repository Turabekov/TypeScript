"use strict";
const aA = {};
// if(assertUser(arrApi)) {
//     arrApi.name = "Вася";
// }
assertUser(aA);
aA.name = "Вася";
function assertUser(obj) {
    if (typeof obj === "object" && !!obj && "name" in obj) {
        return;
    }
    throw new Error("не пользователь");
}
