"use strict";
var StatusCodeHeterogeneous;
(function (StatusCodeHeterogeneous) {
    StatusCodeHeterogeneous["SUCCESS"] = "1";
    StatusCodeHeterogeneous[StatusCodeHeterogeneous["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    StatusCodeHeterogeneous[StatusCodeHeterogeneous["FAILED"] = 3] = "FAILED";
})(StatusCodeHeterogeneous || (StatusCodeHeterogeneous = {}));
const res = {
    message: 'Success',
    statusCode: 1 /* StatusCode.SUCCESS */,
};
const statusCode = 2 /* StatusCode.IN_PROGRESS */;
