"use strict";
const n = null; // * can
const n1 = null; // * can
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: "Vasa",
        };
    }
}
const user9 = getUser();
if (user9) {
    const name9 = user9.name;
}
