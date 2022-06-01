function generateError(message: string): never {
    throw new Error(message);
}

function dumpError(): never {
    while (true) {}
}

function rec(): never {
    return rec();
}

// const a: never = undefined;

type paymentActionn = "refund" | "checkout" | "reject";

function processAction(action: paymentActionn) {
    switch (action) {
        case "refund":
            //  ...
            break;
        case "checkout":
            // ...
            break;
        case "reject":
            // ...
            break;
        default:
            const _: never = action;
            throw new Error("Нет такого action");
    }
}

function isString(x: string | number): boolean {
    if (typeof x === "string") {
        return true;
    } else if (typeof x === "number") {
        return false;
    }
    generateError("dffdsf");
}
