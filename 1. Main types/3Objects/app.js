"use strict";
function getFullName1(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}!!!`;
}
const user = {
    firstname: "Xumoyun",
    surname: "Turabekov",
    city: "Tashkent",
    age: 19,
    skills: {
        dev: true,
        devops: true,
    },
};
console.log(getFullName1(user));
