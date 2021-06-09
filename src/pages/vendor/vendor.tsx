import React, { useEffect, useState } from 'react';
import Modal from '../../components/modal/modal';
import AddVendorForm from '../vendor/add-vendor/add-vendor';
import EditVendorForm from '../vendor/edit-vendor/edit-vendor';
import ViewVendorForm from '../vendor/view-vendor/view-vendor';
import { IReduxState } from '../../modules/store';
import { AnyAction, Dispatch } from 'redux';
import { IDivisionsRequest } from '../../interfaces/common/get-division';
import { getDivisionsAction } from '../../modules/common';
import { connect } from 'react-redux';
import { ISelectOption } from '../../components/form-field/form-field';
import TableComponent from '../../components/table/table';
import { Checkbox } from '@material-ui/core';
import { Grid, IconButton } from '@material-ui/core';
import GenericSearchFormik, { IVendorSearchFormValues } from './vendor-lookup-search-form';
import { formFields } from '../../constants/vendor/search-form-fields';
import { getVendorsAction } from '../../modules/vendor';
import { IVendorsGetRequest, IVendorsGetResponse, IVendorList } from '../../interfaces/vendor/get-vendors';
import Add from '../../assets/icons/Add.svg';
import Edit from '../../assets/icons/Edit.svg';
import Delete from '../../assets/icons/Delete.svg';
import { useStyles } from './styles';
import ConfirmModal from '../../components/modal/confirm-modal';
import { IVendorDeleteRequest } from '../../interfaces/vendor/delete-vendor';
import { deleteVendorAction } from '../../modules/vendor';
import { IVendorAddRequest } from '../../interfaces/vendor/add-Vendor';
import { addVendorAction, editVendorAction, getVendorAction } from '../../modules/vendor';
import { IVendorGetRequest, IVendorGetResponse } from '../../interfaces/vendor/get-Vendor';
import { IVendorEditRequest } from '../../interfaces/vendor/edit-vendor';

interface IVendorProps {
    divisions: ISelectOption[];
    user: string;
    vendorList: IVendorsGetResponse;
    vendorDetails: IVendorGetResponse;
    getVendors: (data: IVendorsGetRequest) => void;
    getDivisions: (data: IDivisionsRequest) => void;
    addVendor: (data: IVendorAddRequest) => void;
    getVendor: (data: IVendorGetRequest) => void;
    editVendor: (data: IVendorEditRequest) => void;
    deleteVendor: (data: IVendorDeleteRequest) => void;
}

const titles = [
    { value: 'vendorNumber', label: 'Vendor Number' },
    { value: 'vendorName', label: 'Vendor Name' },
    { value: 'contactName', label: 'Contact Name' },
    { value: 'email', label: 'Email' },
    { value: 'contactPhone', label: 'Contact Phone' },
    { value: 'contactFax', label: 'Contact Fax' },
    { value: 'wimsub', label: 'WIMSUB' },
    { value: 'division', label: 'Division #' },
    { value: 'lastUpdated', label: 'Last Updated' },
];

interface ITitles {
    value: string;
    label: string;
    minWidth?: number;
}

const Vendor = (props: IVendorProps) => {
    const classes1 = useStyles();
    const [activeRowId, setActiveRowId] = React.useState<string>('');
    const [addModalStatus, setAddModalStatus] = React.useState(false);
    const [editModalStatus, setEditModalStatus] = React.useState(false);
    const [viewModalStatus, setViewModalStatus] = React.useState(false);
    const [deleteModalStatus, setDeleteModalStatus] = useState(false);
    const [searchFieldValues, setSearchFieldValues] = useState<IVendorSearchFormValues>();
    const [isLoading, setLoading] = useState(false);
    const {
        divisions,
        user,
        vendorDetails,
        vendorList,
        deleteVendor,
        getDivisions,
        getVendors,
        getVendor,
        editVendor,
        addVendor,
    } = props;

    useEffect(() => {
        getVendors({});
        getDivisions({});
    }, []);

    useEffect(() => {
        if (editModalStatus || viewModalStatus) {
            getVendor({ vendorId: Number(activeRowId) });
            setLoading(true);
        }
    }, [editModalStatus, viewModalStatus]);

    useEffect(() => {
        if (editModalStatus || viewModalStatus) {
            setLoading(false);
        }
    }, [vendorDetails]);

    const handleCheckbox = (value: string) => {
        if (activeRowId !== value) {
            setActiveRowId(value);
        } else {
            setActiveRowId('');
        }
    };

    const addRows = (rows: IVendorList[], titles: ITitles[]) =>
        rows?.map((row) => [
            <Checkbox
                key={row.vendorNumber}
                value={row.id}
                checked={String(row.id) === activeRowId}
                onChange={(e) => handleCheckbox(e.target.value)}
                color="primary"
            />,
            ...titles.map((title, index) => (
                <div
                    key={`${title.value}-${index}`}
                    title={(row as any)[title.value]}
                    className={title.value === 'vendorNumber' ? classes1.vendorNumberCell : classes1.tableCell}
                    onClick={() => {
                        if (title.value === 'vendorNumber') {
                            setViewModalStatus(true);
                        }
                    }}
                >
                    {(row as any)[title.value]}
                </div>
            )),
        ]);
    const sortTitles = (id: string) => {
        getVendors({
            sortBy: 'ASC',
            orderBy: id,
            operator: searchFieldValues?.operator,
            searchBy: searchFieldValues?.searchBy,
            value: searchFieldValues?.value,
        });
    };
    const getTitles = (titles: ITitles[]) => [
        <Checkbox key="checkbox" disabled />,
        ...titles.map((title) => (
            <div key={title.value} onClick={() => sortTitles(title.value)} style={{ minWidth: title?.minWidth }}>
                {title.label}
            </div>
        )),
    ];
    const refreshTable = (page: number, numberOfRecordsPerPage: number) => {
        getVendors({
            limit: numberOfRecordsPerPage,
            offset: page,
            operator: searchFieldValues?.operator,
            searchBy: searchFieldValues?.searchBy,
            value: searchFieldValues?.value,
        });
    };
    const handleChangePage = (page: number, numberOfRecordsPerPage: number) => {
        getVendors({
            limit: numberOfRecordsPerPage,
            offset: page,
            operator: searchFieldValues?.operator,
            searchBy: searchFieldValues?.searchBy,
            value: searchFieldValues?.value,
        });
    };
    const handleSearchClick = (values: IVendorSearchFormValues) => {
        setSearchFieldValues(values);
        getVendors({
            limit: vendorList.numberOfRecordsPerPage,
            offset: vendorList.currentPage,
            operator: values?.operator,
            searchBy: values?.searchBy,
            value: values?.value,
        });
    };
    return (
        <div className={classes1.gridContainer}>
            <Grid container>
                <Grid item classes={{ root: classes1.actionGrid }}>
                    <IconButton classes={{ root: classes1.actionButton }} onClick={() => setAddModalStatus(true)}>
                        {<img src={Add} className={classes1.buttonSize} />}
                    </IconButton>
                    <IconButton
                        classes={{ root: classes1.actionButton }}
                        disabled={activeRowId === ''}
                        onClick={() => setEditModalStatus(true)}
                    >
                        {<img src={Edit} className={classes1.buttonSize} />}
                    </IconButton>
                    <IconButton
                        classes={{ root: classes1.actionButton }}
                        disabled={activeRowId === ''}
                        onClick={() => setDeleteModalStatus(true)}
                    >
                        {<img src={Delete} className={classes1.buttonSize} />}
                    </IconButton>
                </Grid>
                <TableComponent
                    searchForm={
                        <GenericSearchFormik
                            handleSearchClick={(values: IVendorSearchFormValues) => handleSearchClick(values)}
                            formFields={formFields['vendor']}
                        />
                    }
                    rows={addRows(vendorList.vendorList, titles)}
                    titles={getTitles(titles)}
                    page={vendorList?.currentPage - 1}
                    handleChangePage={(page, numberOfRecordsPerPage) => handleChangePage(page, numberOfRecordsPerPage)}
                    refreshTable={(page, numberOfRecordsPerPage) => refreshTable(page, numberOfRecordsPerPage)}
                    count={vendorList?.totalNumberOfRecords}
                />
                <Modal
                    maxWidth={'xl'}
                    title="Add Vendor"
                    content={
                        <AddVendorForm
                            divisions={divisions}
                            user={user}
                            addVendor={addVendor}
                            setModalStatus={setAddModalStatus}
                        />
                    }
                    modalStatus={addModalStatus}
                    setModalStatus={setAddModalStatus}
                />
                <Modal
                    maxWidth={'xl'}
                    title="Edit Vendor"
                    content={
                        isLoading ? (
                            'Loading...'
                        ) : (
                            <EditVendorForm
                                divisions={divisions}
                                user={user}
                                vendorDetails={vendorDetails}
                                editVendor={editVendor}
                                setModalStatus={setEditModalStatus}
                            />
                        )
                    }
                    modalStatus={editModalStatus}
                    setModalStatus={setEditModalStatus}
                />
                <Modal
                    maxWidth={'xl'}
                    title=" View Vendor"
                    content={
                        isLoading ? (
                            'Loading...'
                        ) : (
                            <ViewVendorForm divisions={divisions} user={user} vendorDetails={vendorDetails} />
                        )
                    }
                    modalStatus={viewModalStatus}
                    setModalStatus={setViewModalStatus}
                />
            </Grid>
            <ConfirmModal
                title="Confirm"
                message="Are you sure you want to delete the item?"
                buttonVariant="text"
                onSuccess={() => {
                    deleteVendor({ vendorId: [activeRowId] });
                    setDeleteModalStatus(false);
                }}
                onCancel={() => {
                    setDeleteModalStatus(false);
                }}
                confirmModalStatus={deleteModalStatus}
            />
        </div>
    );
};

const mapStateToProps = (state: IReduxState) => ({
    divisions: state.common.divisions.divisions || [],
    vendorDetails: state.vendor.vendorData,
    user: '100',
    vendorList: state.vendor.vendorsDetails,
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    getDivisions: (data: IDivisionsRequest) => dispatch(getDivisionsAction(data)),
    getVendors: (data: IVendorsGetRequest) => dispatch(getVendorsAction(data)),
    addVendor: (data: IVendorAddRequest) => dispatch(addVendorAction(data)),
    getVendor: (data: IVendorGetRequest) => dispatch(getVendorAction(data)),
    editVendor: (data: IVendorEditRequest) => dispatch(editVendorAction(data)),
    deleteVendor: (data: IVendorDeleteRequest) => dispatch(deleteVendorAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
