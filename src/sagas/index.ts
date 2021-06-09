import { all, takeLatest } from 'redux-saga/effects';
import { ADD_VENDOR, DELETE_VENDOR, EDIT_VENDOR, GET_VENDOR, GET_VENDORS, VENDOR_LOOKUP } from '../modules/vendor';
import {
    addVendorSaga,
    deleteVendorSaga,
    editVendorSaga,
    getVendorSaga,
    getVendorsSaga,
    vendorLookupSaga,
} from './vendor';
import { GET_DIVISIONS } from '../modules/common';
import { getDivisionsSaga } from './common';
import { GET_STATUS, POST_DATA } from '../modules/status';
import { getStatusSaga, postDataSaga } from './status';

export function* rootSaga() {
    yield all([
        takeLatest(GET_STATUS, getStatusSaga),
        takeLatest(GET_VENDOR, getVendorSaga),
        takeLatest(GET_VENDORS, getVendorsSaga),
        takeLatest(ADD_VENDOR, addVendorSaga),
        takeLatest(EDIT_VENDOR, editVendorSaga),
        takeLatest(DELETE_VENDOR, deleteVendorSaga),
        takeLatest(VENDOR_LOOKUP, vendorLookupSaga),
        takeLatest(GET_DIVISIONS, getDivisionsSaga),
        takeLatest(POST_DATA, postDataSaga),
    ]);
}
