interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Succes = "succes",
    Failed = "failed",
}

interface IPaymentRequest extends IPayment {}

interface IDataSucces extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSucces {
    status: PaymentStatus.Succes;
    data: IDataSucces;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

type f = (res: IResponseSucces | IResponseFailed) => number;

type Res = IResponseSucces | IResponseFailed;

function isSucces(res: Res): res is IResponseSucces {
    if (res.status === PaymentStatus.Succes) {
        return true;
    }
    return false;
}

function getIdFromData(res: Res): number {
    if (isSucces(res)) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
}
