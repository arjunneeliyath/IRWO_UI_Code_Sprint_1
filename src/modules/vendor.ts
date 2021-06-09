import { AnyAction } from 'redux';
import { IVendorAddRequest } from '../interfaces/vendor/add-Vendor';
import { IVendorDeleteRequest } from '../interfaces/vendor/delete-vendor';
import { IVendorEditRequest } from '../interfaces/vendor/edit-vendor';
import { IVendorGetRequest } from '../interfaces/vendor/get-Vendor';
import { IVendorGetResponse } from '../interfaces/vendor/get-Vendor';
import { IVendorsGetRequest, IVendorsGetResponse } from '../interfaces/vendor/get-vendors';
import { IVendorLookupRequest, IVendorLookupResponse } from '../interfaces/vendor/vendor-lookup';

export const GET_VENDOR = 'GET_VENDOR';
export const GET_VENDOR_SUCCESS = 'GET_VENDOR_SUCCESS';

export const GET_VENDORS = 'GET_VENDORS';
export const GET_VENDORS_SUCCESS = 'GET_VENDORS_SUCCESS';

export const ADD_VENDOR = 'ADD_VENDOR';

export const EDIT_VENDOR = 'EDIT_VENDOR';

export const DELETE_VENDOR = 'DELETE_VENDOR';

export const VENDOR_LOOKUP = 'VENDOR_LOOKUP';
export const VENDOR_LOOKUP_SUCCESS = 'VENDOR_LOOKUP_SUCCESS';

export const addVendorAction = (value: IVendorAddRequest) => ({
    type: ADD_VENDOR,
    value,
});

export const editVendorAction = (value: IVendorEditRequest) => ({
    type: EDIT_VENDOR,
    value,
});

export const deleteVendorAction = (value: IVendorDeleteRequest) => ({
    type: DELETE_VENDOR,
    value,
});

export const getVendorAction = (value: IVendorGetRequest) => ({
    type: GET_VENDOR,
    value,
});

export const getVendorSuccessAction = (value: IVendorGetResponse) => ({
    type: GET_VENDOR_SUCCESS,
    value,
});

export const getVendorsAction = (value: IVendorsGetRequest) => ({
    type: GET_VENDORS,
    value,
});

export const getVendorsSuccessAction = (value: IVendorsGetResponse) => ({
    type: GET_VENDORS_SUCCESS,
    value,
});

export const lookpuVendorAction = (value: IVendorLookupRequest) => ({
    type: VENDOR_LOOKUP,
    value,
});
export const lookpuVendorSuccessAction = (value: IVendorLookupResponse) => ({
    type: VENDOR_LOOKUP_SUCCESS,
    value,
});

export interface IVendorReducer {
    vendorData: IVendorGetResponse;
    vendorsDetails: IVendorsGetResponse;
    vendorLookup: IVendorLookupResponse;
}

const vendorReducerInit = {
    vendorData: {},
    vendorsDetails: {},
    vendorLookup: {},
};

const vendorReducer = (state = vendorReducerInit, action: AnyAction) => {
    switch (action.type) {
        case GET_VENDOR_SUCCESS:
            return {
                ...state,
                vendorData: {
                    ...action.value,
                },
            };
        case GET_VENDORS_SUCCESS:
            return {
                ...state,
                vendorsDetails: {
                    ...action.value,
                },
            };
        case VENDOR_LOOKUP_SUCCESS:
            return {
                ...state,
                vendorLookup: {
                    ...action.value,
                },
            };
    }
    return state;
};

export default vendorReducer;
