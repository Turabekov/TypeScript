"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Succes"] = "succes";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isSucces(res) {
    if (res.status === PaymentStatus.Succes) {
        return true;
    }
    return false;
}
function getIdFromData(res) {
    if (isSucces(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
