import { IVendorAddResponse } from './add-Vendor';
import { IAddress } from './common';

export interface IVendorEditRequest {
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
export type IVendorEditResponse = IVendorAddResponse;
