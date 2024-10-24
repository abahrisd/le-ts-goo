"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
////////////////
function throwError(errorMessage) {
    throw new Error(errorMessage);
}
function isResSuccess(result) {
    return result.status === PaymentStatus.Success;
}
const daPay = (result) => {
    if (isResSuccess(result)) {
        return result.data.databaseId;
    }
    else {
        throwError(result.data.errorMessage);
    }
};
