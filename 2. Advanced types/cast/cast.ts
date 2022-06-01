let num = 5;
let str: string = a.toString();
let e: string = new String(num).valueOf();
let f: boolean = new Boolean(num).valueOf();

let str2 = "sdfdf";
let num2: number = parseInt(c);

interface UserA {
    name: string;
    email: string;
    login: string;
}

const userA: UserA = {
    name: "Vasya",
    email: "vassiliy@yandex.ru",
    login: "vasia",
};

interface AdminA {
    name: string;
    role: number;
}

const admin: AdminA = {
    ...userA,
    role: 1,
};

//  function mapping

function userToAdmin(user: User): AdminA {
    return {
        name: user.name,
        role: 1,
    };
}
