import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { toast } from 'react-toastify';
import {
    addVendorAPI,
    deleteVendorAPI,
    editVendorAPI,
    getVendorAPI,
    getVendorsAPI,
    vendorLookupAPI,
} from '../end-points/vendor';
import { IError } from '../interfaces/error-response';
import { IVendorAddResponse } from '../interfaces/vendor/add-Vendor';
import { IVendorGetResponse } from '../interfaces/vendor/get-Vendor';
import { IVendorsGetResponse } from '../interfaces/vendor/get-vendors';
import { IVendorLookupResponse } from '../interfaces/vendor/vendor-lookup';
import {
    getVendorsAction,
    getVendorsSuccessAction,
    getVendorSuccessAction,
    lookpuVendorAction,
    lookpuVendorSuccessAction,
} from '../modules/vendor';
import { ISuccessResponse } from '../interfaces/success-response';
import { IVendorEditResponse } from '../interfaces/vendor/edit-vendor';
import { IVendorDeleteResponse } from '../interfaces/vendor/delete-vendor';

export function* getVendorSaga(action: AnyAction) {
    try {
        const getVendorResponse: ISuccessResponse<IVendorGetResponse> = yield call(getVendorAPI, action.value);
        yield put(getVendorSuccessAction(getVendorResponse.data));
    } catch (error) {
        error.errors.forEach((error: IError) => {
            toast.error(error.message);
        });
    }
}

export function* getVendorsSaga(action: ReturnType<typeof getVendorsAction>) {
    try {
        const getVendorsResponse: ISuccessResponse<IVendorsGetResponse> = yield call(getVendorsAPI, action.value);
        yield put(getVendorsSuccessAction(getVendorsResponse.data));
    } catch (error) {
        error.errors.forEach((error: IError) => {
            toast.error(error.message);
        });
    }
}

export function* addVendorSaga(action: AnyAction) {
    try {
        const addVendorResponse: ISuccessResponse<IVendorAddResponse> = yield call(addVendorAPI, action.value);
        const getVendorsResponse: ISuccessResponse<IVendorsGetResponse> = yield call(getVendorsAPI, action.value);
        yield put(getVendorsSuccessAction(getVendorsResponse.data));
        toast.success(addVendorResponse.data.message);
    } catch (error) {
        error.errors.forEach((error: IError) => {
            toast.error(error.message);
        });
    }
}

export function* editVendorSaga(action: AnyAction) {
    try {
        const editVendorResponse: ISuccessResponse<IVendorEditResponse> = yield call(editVendorAPI, action.value);
        const getVendorsResponse: ISuccessResponse<IVendorsGetResponse> = yield call(getVendorsAPI, action.value);
        yield put(getVendorsSuccessAction(getVendorsResponse.data));
        toast.success(editVendorResponse.data.message);
    } catch (error) {
        error.errors.forEach((error: IError) => {
            toast.error(error.message);
        });
    }
}

export function* deleteVendorSaga(action: AnyAction) {
    try {
        const deleteVendorResponse: ISuccessResponse<IVendorDeleteResponse> = yield call(deleteVendorAPI, action.value);
        const getVendorsResponse: ISuccessResponse<IVendorsGetResponse> = yield call(getVendorsAPI, action.value);
        yield put(getVendorsSuccessAction(getVendorsResponse.data));
        toast.success(deleteVendorResponse.data.message);
    } catch (error) {
        error.errors.forEach((error: IError) => {
            toast.error(error.message);
        });
    }
}

export function* vendorLookupSaga(action: ReturnType<typeof lookpuVendorAction>) {
    try {
        const vendorLookupResponse: ISuccessResponse<IVendorLookupResponse> = yield call(vendorLookupAPI, action.value);
        yield put(lookpuVendorSuccessAction(vendorLookupResponse.data));
    } catch (error) {
        error.errors.forEach((error: IError) => {
            toast.error(error.message);
        });
    }
}
