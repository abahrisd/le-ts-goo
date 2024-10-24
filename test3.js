"use strict";
var PaymentStatuses;
(function (PaymentStatuses) {
    PaymentStatuses["Success"] = "success";
    PaymentStatuses["Failed"] = "failed";
})(PaymentStatuses || (PaymentStatuses = {}));
////////////////
function throwError(errorMessage) {
    throw new Error(errorMessage);
}
function isResSuccess(result) {
    return result.status === PaymentStatuses.Success;
}
const daPay = (result) => {
    if (isResSuccess(result)) {
        return result.data.databaseId;
    }
    else {
        throwError(result.data.errorMessage);
    }
};
