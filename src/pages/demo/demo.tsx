import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import Button from '../../components/button/button';
import { getStatusAction, postDataAction } from '../../modules/status';
import { IReduxState } from '../../modules/store';
import { IStatusResponse, IData } from '../../interfaces/statusResponse';
import { IVendorGetResponse } from '../../interfaces/vendor/get-Vendor';
import {
    addVendorAction,
    deleteVendorAction,
    editVendorAction,
    getVendorAction,
    getVendorsAction,
    lookpuVendorAction,
} from '../../modules/vendor';
import { IVendorGetRequest } from '../../interfaces/vendor/get-Vendor';
import { IVendorAddRequest } from '../../interfaces/vendor/add-Vendor';
import { IVendorEditRequest } from '../../interfaces/vendor/edit-vendor';
import { IVendorDeleteRequest } from '../../interfaces/vendor/delete-vendor';
import { IVendorsGetRequest, IVendorsGetResponse } from '../../interfaces/vendor/get-vendors';
import { IVendorLookupRequest, IVendorLookupResponse } from '../../interfaces/vendor/vendor-lookup';
import { IDivisionsRequest, IDivisionsResponse } from '../../interfaces/common/get-division';
import { getDivisionsAction } from '../../modules/common';
import Modal from '../../components/modal/modal';

interface IStatusProps {
    getStatus: () => void;
    getVendor: (data: IVendorGetRequest) => void;
    getVendors: (data: IVendorsGetRequest) => void;
    addVendor: (data: IVendorAddRequest) => void;
    editVendor: (data: IVendorEditRequest) => void;
    deleteVendor: (data: IVendorDeleteRequest) => void;
    lookupVendor: (data: IVendorLookupRequest) => void;
    getDivisions: (data: IDivisionsRequest) => void;
    status: IStatusResponse;
    data: IData;
    postData: () => void;
    vendorData: IVendorGetResponse;
    vendorList: IVendorsGetResponse;
    vendorLookup: IVendorLookupResponse;
    divisions: IDivisionsResponse;
}

const status = (props: IStatusProps) => {
    const {
        vendorList,
        divisions,
        status,
        vendorData,
        vendorLookup,
        data,
        postData,
        getVendor,
        getVendors,
        addVendor,
        editVendor,
        deleteVendor,
        lookupVendor,
        getDivisions,
        getStatus,
    } = props;
    const [modalStatus, setModalStatus] = useState(false);
    return (
        <div>
            <Modal
                title="Form Title"
                content={<>Your Content goes here</>}
                modalStatus={modalStatus}
                setModalStatus={setModalStatus}
            />
            <Button key="Modal Button" value="Modal" onClick={() => setModalStatus(true)} />
            <div>
                <Button key="Button" value="Click to get Status" onClick={getStatus} />
                <div>{`Version: ${status.version}`}</div>
                <div>{`Status: ${status.apiStatus}`}</div>
            </div>
            <Button key="Button" value="Post Data" onClick={postData} />
            <div>{`Status: ${data.message}`} </div>
            <div>
                <Button
                    key="Button"
                    value="Click to get Divisions"
                    onClick={() => {
                        getDivisions({});
                    }}
                />
                <div>
                    Division
                    {divisions?.divisions?.map((division) => (
                        <p key={division.id}>{division.name}</p>
                    ))}
                </div>
            </div>
            <div>
                <Button
                    key="Button"
                    value="Click to get vendor ID"
                    onClick={() => {
                        getVendor({ vendorId: 4 });
                    }}
                />
                <div>ID: {vendorData.id}</div>
                <div>Name: {vendorData.vendorName}</div>
                <Button
                    key="Button"
                    value="Click to Add Vendor"
                    onClick={() => {
                        addVendor({});
                    }}
                />

                <Button
                    key="Button"
                    value="Click to Edit Vendor"
                    onClick={() => {
                        editVendor({});
                    }}
                />

                <Button
                    key="Button"
                    value="Click to Delete Vendor"
                    onClick={() => {
                        deleteVendor({ vendorId: ['4'] });
                    }}
                />
                <Button
                    key="Button"
                    value="Click to Lookup vendors"
                    onClick={() => {
                        lookupVendor({ vendorId: '4' });
                    }}
                />
                <div>Current page: {vendorLookup.currentPage}</div>
                <Button
                    key="Button"
                    value="Click to get vendors"
                    onClick={() => {
                        getVendors({});
                    }}
                />
                <div>total vendors: {vendorList.totalNumberOfRecords}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th> contactPhone</th>
                            <th>vendorName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendorList?.vendorList?.map((item) => (
                            <tr key={item.contactName}>
                                <td>{item.email}</td>
                                <td>{item.contactPhone} </td>
                                <td>{item.vendorName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const mapStateToProps = (state: IReduxState) => {
    return {
        status: state.status.statusData,
        vendorData: state.vendor.vendorData,
        vendorList: state.vendor.vendorsDetails,
        vendorLookup: state.vendor.vendorLookup,
        divisions: state.common.divisions,
        data: state.status.data,
    };
};
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    getStatus: () => dispatch(getStatusAction()),
    getVendor: (data: IVendorGetRequest) => dispatch(getVendorAction(data)),
    getVendors: (data: IVendorsGetRequest) => dispatch(getVendorsAction(data)),
    addVendor: (data: IVendorAddRequest) => dispatch(addVendorAction(data)),
    editVendor: (data: IVendorEditRequest) => dispatch(editVendorAction(data)),
    deleteVendor: (data: IVendorDeleteRequest) => dispatch(deleteVendorAction(data)),
    lookupVendor: (data: IVendorLookupRequest) => dispatch(lookpuVendorAction(data)),
    getDivisions: (data: IDivisionsRequest) => dispatch(getDivisionsAction(data)),
    postData: () => dispatch(postDataAction()),
});

const statusPage = connect(mapStateToProps, mapDispatchToProps)(status);

export default statusPage;
