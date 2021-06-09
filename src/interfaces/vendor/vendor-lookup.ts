 interface IAddress {
    address1?: string;
    address2?: string;
    address3?: string;
    zip?: string;
    contactName?: string;
    phone?: string;
    fax?: string;
}

export interface IVendorLookupRequest {
    vendorId: string;
    //Note: vendorId is actually the vendorNumber;
    // i.e. which will be provided in search or text box.
}

export interface ILookup {
    vendorName?: string;
    division?: string;
    sid?: number;
    userId?: string;
    vendorNumber?: string;
    wimSub?: string;
    contactPhone?: string;
    email?: string;
    email2?: string;
    email3?: string;
    fax?: string;
    contact?: string;
    billTo?: IAddress;
    shipTo?: IAddress;
}

export interface IVendorLookupResponse {
    totalNumberOfRecords: number;
    currentPage: number;
    id: number;
    totalNumberOfPages: number;
    numberOfRecordsPerPage: number;
    vendorList: ILookup[];
}
