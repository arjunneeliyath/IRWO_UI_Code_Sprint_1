import { call, put } from 'redux-saga/effects';
import { getDivisionsAPI } from '../end-points/common';
import { IDivisionsResponse } from '../interfaces/common/get-division';
import { ISuccessResponse } from '../interfaces/success-response';
import { getDivisionsAction, getDivisionsSuccessAction } from '../modules/common';
import { toast } from 'react-toastify';
import { IError } from '../interfaces/error-response';

export function* getDivisionsSaga(action: ReturnType<typeof getDivisionsAction>) {
    try {
        const response: ISuccessResponse<IDivisionsResponse> = yield call(getDivisionsAPI, action.value);
        yield put(getDivisionsSuccessAction(response.data));
    } catch (error) {
        error.errors.forEach((error: IError) => {
            toast.error(error.message);
        });
    }
}
