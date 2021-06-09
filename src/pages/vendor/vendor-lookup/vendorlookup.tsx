import React, { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import TableComponent from '../../../components/table/table';
import { Checkbox, Button } from '@material-ui/core';
import { IReduxState } from '../../../modules/store';
import { lookpuVendorAction } from '../../../modules/vendor';
import { AnyAction } from 'redux';
import { ILookup, IVendorLookupRequest, IVendorLookupResponse } from '../../../interfaces/vendor/vendor-lookup';
import SearchFormField, { IVendorSearchFormValues } from '../vendor-lookup-search-form';
import { formFields } from '../../../constants/vendor/search-form-fields';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';

interface IVendorLookupProps {
    vendorId: string;
    vendorLookup: IVendorLookupResponse;
    onChoose: (data: ILookup) => void;
    lookupVendor: (data: IVendorLookupRequest) => void;
    setVendorLookupModalStatus: (modalStatus: boolean) => void;
}
interface Titles {
    id: 'vendorNumber' | 'vendorName' | 'wimSub' | 'division' | 'contact' | 'contactPhone' | 'billTo' | 'shipTo';
    subId?: string;
    label?: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const titles: Titles[] = [
    { id: 'vendorNumber', label: 'Vendor Number' },
    { id: 'vendorName', label: 'Vendor Name' },
    { id: 'wimSub', label: 'WIMSUB' },
    { id: 'division', label: 'Division #' },
    { id: 'contact', label: 'Contact Name' },
    { id: 'contactPhone', label: 'Phone' },
    { id: 'billTo', subId: 'address1', label: 'Bill Address' },
    { id: 'billTo', subId: 'zip', label: 'Postal Address' },
    { id: 'shipTo', subId: 'address1', label: 'Ship Address' },
    { id: 'shipTo', subId: 'zip', label: 'Ship Postal', minWidth: 50 },
];

type ISubId = 'address1' | 'zip';

const VendorLookup = (props: IVendorLookupProps) => {
    const classes = useStyles();
    const [activeRowId, setActiveRowId] = React.useState<string>();
    const { vendorLookup, vendorId, lookupVendor, setVendorLookupModalStatus, onChoose } = props;
    const handleCheckbox = (value: string) => {
        setActiveRowId(activeRowId !== value ? value : '');
    };

    useEffect(() => {
        lookupVendor({ vendorId: vendorId });
    }, []);

    const addRows = (rows: ILookup[], titles: Titles[]) => {
        return rows?.map((row) => [
            <Checkbox
                key={row.vendorNumber}
                value={row.sid}
                checked={String(row.sid) === activeRowId}
                onChange={(e) => handleCheckbox(e.target.value)}
                color="primary"
            />,
            ...titles?.map((column) => {
                let title = '';
                if (column.id === 'shipTo' || column.id === 'billTo') {
                    if (column.subId) {
                        const subId = row[column.id];
                        title = subId?.[column.subId as ISubId] || '';
                    }
                } else {
                    title = row[column.id] || '';
                }
                return (
                    <div
                        key={row.vendorNumber}
                        title={title}
                        className={column.id === 'vendorNumber' ? classes.vendorNumberCell : classes.tableCell}
                    >
                        {title}
                    </div>
                );
            }),
        ]);
    };
    const sortTitles = () => {
        //TODO: Need to integrate API
    };
    const getTitles = (titles: Titles[]) => [
        <Checkbox key="checkbox" disabled={true} />,
        ...titles.map((title) => (
            <div key={title.id} onClick={sortTitles}>
                {title.label}
            </div>
        )),
    ];
    const refreshTable = () => {
        //TODO: Need to integrate API
    };
    const handleChangePage = () => {
        //TODO: Need to integrate API
    };
    const handleChooseClick = () => {
        //TODO: Need to send this data to its parent page
        const lookupData = props?.vendorLookup?.vendorList?.find((item) => item.sid === Number(activeRowId));
        if (lookupData) {
            onChoose(lookupData);
        }
        setVendorLookupModalStatus(false);
    };
    const handleSearchClick = (values: IVendorSearchFormValues) => {
        lookupVendor({ vendorId: values.searchBy });
    };
    return (
        <Grid container className={classes.gridContainer}>
            <TableComponent
                searchForm={
                    <Grid item>
                        <SearchFormField
                            handleSearchClick={(values) => handleSearchClick(values)}
                            formFields={formFields['vendorLookup']}
                            defaultValue={vendorId}
                        />
                    </Grid>
                }
                rows={addRows(vendorLookup.vendorList, titles)}
                titles={getTitles(titles)}
                page={vendorLookup.currentPage - 1}
                handleChangePage={() => handleChangePage()}
                refreshTable={() => refreshTable()}
                count={vendorLookup.vendorList?.length}
            />
            {vendorLookup.vendorList?.length > 0 && (
                <Grid item xs={12} className={classes.lookupButtonsWrapper}>
                    <Button
                        disableRipple
                        className={classes.footerButton}
                        onClick={() => {
                            setVendorLookupModalStatus(false);
                        }}
                        type="submit"
                        color="primary"
                        variant="outlined"
                    >
                        Cancel
                    </Button>
                    <Button
                        disableRipple
                        disabled={!activeRowId}
                        className={classes.footerButton}
                        onClick={handleChooseClick}
                        color="primary"
                        variant="contained"
                    >
                        Choose
                    </Button>
                </Grid>
            )}
        </Grid>
    );
};

const mapStateToProps = (state: IReduxState) => ({ vendorLookup: state.vendor.vendorLookup });
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    lookupVendor: (data: IVendorLookupRequest) => dispatch(lookpuVendorAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VendorLookup);
