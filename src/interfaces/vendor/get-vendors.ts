export interface IVendorsGetRequest {
    limit?: number;
    offset?: number;
    sortBy?: 'ASC' | 'DESC';
    orderBy?: string;
    searchBy?: string;
    value?: string;
    operator?: string;
}

export interface IVendorList {
    id: number;
    vendorNumber: string;
    vendorName: string;
    contactName: string;
    email: string;
    contactPhone: string;
    contactFax: string;
    wimsub: string;
    division: string;
    lastUpdated: string;
}

export interface IVendorsGetResponse {
    totalNumberOfRecords: number;
    currentPage: number;
    totalNumberOfPages: number;
    numberOfRecordsPerPage: number;
    vendorList: IVendorList[];
}
