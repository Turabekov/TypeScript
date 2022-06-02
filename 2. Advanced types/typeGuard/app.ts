interface UserB {
    name: string;
    email: string;
    login: string;
}

const userB: UserB = {
    name: "Vasya",
    email: "vassiliy@yandex.ru",
    login: "vasia",
};

interface AdminB {
    name: string;
    role: number;
}

function isString(x: string | number): x is string {
    return typeof id === "string";
}

function logId(id: string | number) {
    if (isString(id)) {
        console.log(id);
    } else {
        console.log(id);
    }
}

function isAdmin(user: UserB | AdminB): user is AdminB {
    return "role" in user;
}

function isAdminAlternative(user: UserB | AdminB): user is AdminB {
    return (user as AdminB).role !== undefined;
}

function setRoleZero(user: UserB | AdminB) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error("User not Admin");
    }
}
