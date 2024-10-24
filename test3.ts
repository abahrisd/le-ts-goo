interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

////////////////

function throwError(errorMessage: string): never {
    throw new Error(errorMessage);
}

function isResSuccess(result: IResponseSuccess | IResponseFailed): result is IResponseSuccess {
    return result.status === PaymentStatus.Success;
}

const daPay: f = (result) => {
    if (isResSuccess(result)) {
        return result.data.databaseId;
    } else {
        throwError(result.data.errorMessage);
    }
}