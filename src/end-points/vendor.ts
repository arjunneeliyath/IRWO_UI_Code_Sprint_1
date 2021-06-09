import { IVendorAddRequest } from '../interfaces/vendor/add-Vendor';
import { IVendorDeleteRequest } from '../interfaces/vendor/delete-vendor';
import { IVendorEditRequest } from '../interfaces/vendor/edit-vendor';
import { IVendorGetRequest } from '../interfaces/vendor/get-Vendor';
import { IVendorsGetRequest } from '../interfaces/vendor/get-vendors';
import { IVendorLookupRequest } from '../interfaces/vendor/vendor-lookup';
import {
    vendorAddResponse,
    vendorDeleteResponse,
    vendorEditResponse,
    vendorGetResponse,
    vendorLookupResponse,
    vendorsGetResponse,
} from '../mocks/vendor-endpoint-mock';
import { mockPromise } from '../utils/mock-promise';
//TODO: this comments will be removed when integrating real APIs.
/* eslint-disable @typescript-eslint/no-unused-vars */
export const getVendorAPI = (value: IVendorGetRequest) => {
    return mockPromise(vendorGetResponse);
};

export const addVendorAPI = (value: IVendorAddRequest) => {
    return mockPromise(vendorAddResponse);
};

export const editVendorAPI = (value: IVendorEditRequest) => {
    return mockPromise(vendorEditResponse);
};

export const deleteVendorAPI = (value: IVendorDeleteRequest) => {
    return mockPromise(vendorDeleteResponse);
};

export const getVendorsAPI = (value: IVendorsGetRequest) => {
    return mockPromise(vendorsGetResponse);
};

export const vendorLookupAPI = (value: IVendorLookupRequest) => {
    return mockPromise(vendorLookupResponse);
};
