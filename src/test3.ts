interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatuses {
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
    status: PaymentStatuses.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatuses.Failed;
    data: IDataFailed;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

////////////////

function throwError(errorMessage: string): never {
    throw new Error(errorMessage);
}

function isResSuccess(result: IResponseSuccess | IResponseFailed): result is IResponseSuccess {
    return result.status === PaymentStatuses.Success;
}

const daPay: f = (result) => {
    if (isResSuccess(result)) {
        return result.data.databaseId;
    } else {
        throwError(result.data.errorMessage);
    }
}