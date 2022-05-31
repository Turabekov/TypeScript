"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const res2 = {
    message: "Платеж успешен",
    statusCode: StatusCode.SUCCESS,
};
// 1 - успех
// "p" - в  процессе
// "f" - отклонен
if (res2.statusCode === StatusCode.SUCCESS) {
}
function action(status) { }
action(StatusCode.SUCCESS);
action(1);
const res4 = 1 /* Roles.ADMIN */;
