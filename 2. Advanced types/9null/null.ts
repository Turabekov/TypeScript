const n: null = null; // * can
const n1: any = null; // * can
// const n2: number = null; // * can not
// const n3: string = null; // * can not
// const n4: boolean = null; // * can not
// const n5: undefined = null; // * can not

interface User9 {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) {
        return null;
    } else {
        return {
            name: "Vasa",
        } as User9;
    }
}

const user9 = getUser();
if (user9) {
    const name9 = user9.name;
}
