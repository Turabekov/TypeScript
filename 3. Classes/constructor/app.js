"use strict";
class User12 {
    constructor(ageOrName, age) {
        if (typeof ageOrName === "string") {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === "number") {
            this.age = ageOrName;
        }
        if (typeof age === "number") {
            this.age = age;
        }
    }
}
const user12 = new User12("Вася");
const user13 = new User12();
const user14 = new User12(33);
