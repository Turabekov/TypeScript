class User12 {
    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);

    constructor(ageOrName?: string | number, age?: number) {
        if (typeof ageOrName === "string") {
            this.name = ageOrName;
        } else if (typeof ageOrName === "number") {
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
