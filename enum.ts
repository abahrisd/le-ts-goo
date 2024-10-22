
const enum StatusCode {
    SUCCESS = 1,
    IN_PROGRESS,
    FAILED
}

enum StatusCodeHeterogeneous {
    SUCCESS = '1',
    IN_PROGRESS = 2,
    FAILED = 3
}

const res = {
    message: 'Success',
    statusCode: StatusCode.SUCCESS,
};

const statusCode = StatusCode.IN_PROGRESS;