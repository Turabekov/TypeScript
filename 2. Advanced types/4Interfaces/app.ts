interface User1 {
    name: string;
    age: number;
    skills: string[];

    log: (id: number) => string;
}

interface Role1 {
    roleId: number;
}

interface UserWithRole1 extends User1, Role1 {
    createdAt: Date;
}

type User4 = {
    name: string;
    age: number;
    skills: string[];

    log: (id: number) => string;
};

let user2: UserWithRole1 = {
    name: "asd",
    age: 3,
    skills: ["1", "2"],
    roleId: 1,
    createdAt: new Date(),

    log(id) {
        return "";
    },
};

interface UserDic {
    [index: number]: User;
}

type UserDic2 = {
    [index: number]: User;
};
