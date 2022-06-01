interface User8 {
    login: string;
    password?: string; // ? -> optional
}

const user8: User8 = {
    login: "a@a.ru",
    password: "1",
};

// ? optional in functions

function multiply(first: number, second?: number): number {
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply(5);

// ? optional in objects
interface UserPro {
    login: string;
    password?: {
        type: "primary" | "secondary";
    };
}

function testPass(user: UserPro) {
    const t = user.password?.type;
}

function test(param?: string) {
    const t = param ?? multiply(5);
}
