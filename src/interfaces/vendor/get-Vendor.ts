import { IAddress } from './common';

export interface IVendorGetRequest {
    vendorId: number;
}

export interface IVendorGetResponse {
    id: number;
    vendorNumber: string;
    vendorName: string;
    wimsub: string;
    division: string;
    email: string;
    contactName: string;
    phone: string;
    contact: string;
    fax: string;
    email2: string;
    email3: string;
    billTo: IAddress;
    shipTo: IAddress;
}
