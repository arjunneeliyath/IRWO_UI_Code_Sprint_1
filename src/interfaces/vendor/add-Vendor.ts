import { IAddress } from './common';

export interface IVendorAddRequest {
    vendorName?: string;
    vendorNumber?: string;
    wimsub?: string;
    division?: string;
    email?: string;
    phone?: string;
    contact?: string;
    fax?: string;
    email2?: string;
    email3?: string;
    userId?: string;
    billTo?: IAddress;
    shipTo?: IAddress;
}

export interface IVendorAddResponse {
    message: string;
}
