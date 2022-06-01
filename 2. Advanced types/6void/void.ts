function logId(id: string | number): void {
    console.log(id);
}

const ann = logId(1);

function multiply(f: number, s?: number) {
    if (!s) {
        return f * f;
    }
}

type voidFunc = () => void;

const f1: voidFunc = () => {};

const f2: voidFunc = () => {
    return true;
};

const b = f2();

const skillss = ["Dev", "DevOps"];

const user4 = {
    s: ["s"],
};

skillss.forEach((skill) => user4.s.push(skill));
