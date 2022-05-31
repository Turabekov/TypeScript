enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = "p",
    FAILED = "f",
}

const res2 = {
    message: "Платеж успешен",
    statusCode: StatusCode.SUCCESS,
};

// 1 - успех
// "p" - в  процессе
// "f" - отклонен

if (res2.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS);
action(1);

const enum Roles {
    ADMIN = 1,
    USER = 2,
}

const res4 = Roles.ADMIN;
