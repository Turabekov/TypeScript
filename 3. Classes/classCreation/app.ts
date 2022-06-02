class User11 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user11 = new User11("Вася");
console.log(user11);
user11.name = "Петя";
console.log(user11);
