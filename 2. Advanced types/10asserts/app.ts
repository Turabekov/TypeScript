interface Human {
    name: string;
}

const aA = {};

// if(assertUser(arrApi)) {
//     arrApi.name = "Вася";
// }
assertUser(aA);
aA.name = "Вася";

function assertUser(obj: unknown): asserts obj is Human {
    if (typeof obj === "object" && !!obj && "name" in obj) {
        return;
    }
    throw new Error("не пользователь");
}
