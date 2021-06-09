import { IVendorAddResponse } from './add-Vendor';

export interface IVendorDeleteRequest {
    vendorId: string[];
}
export type IVendorDeleteResponse = IVendorAddResponse;
