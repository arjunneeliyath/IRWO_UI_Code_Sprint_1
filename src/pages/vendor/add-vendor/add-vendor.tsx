import React, { useState } from 'react';
import * as Yup from 'yup';
import { withFormik, Form, FormikProps } from 'formik';
import { Button } from '@material-ui/core';
import FormComponent, { ISelectOption } from '../../../components/form-field/form-field';
import { Grid, Box } from '@material-ui/core';
import { lookup } from '../../../assets/icons';
import { useStyles } from './style';
import { IVendorAddRequest } from '../../../interfaces/vendor/add-Vendor';
import VendorLookup from '../vendor-lookup/vendorlookup';
import Modal from '../../../components/modal/modal';
import { ILookup } from '../../../interfaces/vendor/vendor-lookup';

interface IAddFormProps {
    divisions: ISelectOption[];
    user: string;
    addVendor: (data: IVendorAddRequest) => void;
    setModalStatus: (modalStatus: boolean) => void;
}

interface IAddFormValues {
    userid: string;
    search: string;
    vendorName: string;
    wimsub: string;
    email: string;
    contact: string;
    email3: string;
    vendorNumber: string;
    division: string;
    phone: string;
    fax: string;
    email2: string;
    address1billto: string;
    address1shipto: string;
    address2billto: string;
    address2shipto: string;
    citybillto: string;
    cityshipto: string;
    zipbillto: string;
    zipshipto: string;
    contactbillto: string;
    contactshipto: string;
    phoneshipto: string;
    phonebillto: string;
    faxbillto: string;
    faxshipto: string;
}

const AddVendorForm = (props: IAddFormProps & FormikProps<IAddFormValues>) => {
    const { handleChange, handleBlur, handleReset, values, touched, errors, divisions } = props;
    const classes = useStyles();
    const [lookupModalStatus, setLookupModalStatus] = React.useState(false);
    const [vendorId, setVendorId] = useState('');

    const handleLookupClick = () => {
        setVendorId(values.search);
        setLookupModalStatus(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onChoose = (LookupData: ILookup) => {
        // TODO: Need to map lookup
        // setFieldValue(data)
    };

    return (
        <Grid container>
            <Grid item xs={12} className={classes.heading}>
                Vendor Details
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.boxStyle}>
                    <Form>
                        <Grid container>
                            <Grid item xs={3} className={classes.rowContainer}>
                                <Grid container direction="column">
                                    <Grid item className={classes.rowHeaderNoContent}></Grid>
                                    <Grid item>
                                        <FormComponent
                                            autoFocus
                                            disabled={false}
                                            required={true}
                                            component="input"
                                            id="vendorName"
                                            name="vendorName"
                                            label="Vendor Name"
                                            value={values.vendorName}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            touched={touched.vendorName}
                                            errors={errors.vendorName}
                                            className={classes.inputField}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            required={true}
                                            component="input"
                                            id="wimsub"
                                            name="wimsub"
                                            label="WIMSUB"
                                            value={values.wimsub}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.wimsub}
                                            errors={errors.wimsub}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Grid container>
                                            <Grid item xs={8}>
                                                <FormComponent
                                                    disabled={false}
                                                    required={false}
                                                    component="input"
                                                    label="Search Vendor"
                                                    id="search"
                                                    handleChange={handleChange}
                                                    name="search"
                                                    onBlur={handleBlur}
                                                    placeholder="N/A"
                                                    className={classes.inputField}
                                                    touched={touched.search}
                                                    errors={errors.search}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.buttonLookUp}
                                                    onClick={handleLookupClick}
                                                >
                                                    <img src={lookup} alt="lookup" className={classes.lookupIcon} />
                                                    <div>Lookup</div>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={true}
                                            component="input"
                                            id="email"
                                            name="email"
                                            label="Email"
                                            value={values.email}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.email}
                                            errors={errors.email}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="contact"
                                            name="contact"
                                            label="Contact"
                                            value={values.contact}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.contact}
                                            errors={errors.contact}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="email3"
                                            name="email3"
                                            label="Email 3"
                                            value={values.email3}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.email3}
                                            errors={errors.email3}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} className={classes.rowContainer}>
                                <Grid container direction="column">
                                    <Grid item className={classes.rowHeaderNoContent}></Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={true}
                                            component="input"
                                            id="vendorNumber"
                                            name="vendorNumber"
                                            label="Vendor Number"
                                            value={values.vendorNumber}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.vendorNumber}
                                            errors={errors.vendorNumber}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={true}
                                            component="select"
                                            label="Division"
                                            id="division"
                                            selectOptions={divisions}
                                            handleChange={handleChange}
                                            name="division"
                                            onBlur={handleBlur}
                                            placeholder="N/A"
                                            className={classes.selectTextField}
                                            touched={touched.division}
                                            errors={errors.division}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="phone"
                                            name="phone"
                                            label="Phone"
                                            value={values.phone}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.phone}
                                            errors={errors.phone}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="fax"
                                            name="fax"
                                            label="Fax"
                                            value={values.fax}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.fax}
                                            errors={errors.fax}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="email2"
                                            name="email2"
                                            label="Email 2"
                                            value={values.email2}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.email2}
                                            errors={errors.email2}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={true}
                                            required={false}
                                            component="input"
                                            id="userid"
                                            name="userid"
                                            label="User ID"
                                            value={values.userid}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.userid}
                                            errors={errors.userid}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} className={classes.rowContainer}>
                                <Grid container direction="column">
                                    <Grid item className={classes.rowHeader}>
                                        Bill To
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            component="textarea"
                                            required={false}
                                            disabled={false}
                                            id="address1billto"
                                            name="address1billto"
                                            label="Address 1"
                                            value={values.address1billto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.selectTextField}
                                            touched={touched.address1billto}
                                            errors={errors.address1billto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            component="textarea"
                                            required={false}
                                            disabled={false}
                                            id="address2billto"
                                            name="address2billto"
                                            label="Address 2"
                                            value={values.address2billto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.selectTextField}
                                            touched={touched.address2billto}
                                            errors={errors.address2billto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="citybillto"
                                            name="citybillto"
                                            label="City"
                                            value={values.citybillto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.citybillto}
                                            errors={errors.citybillto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="zipbillto"
                                            name="zipbillto"
                                            label="Zip"
                                            value={values.zipbillto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.zipbillto}
                                            errors={errors.zipbillto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="contactbillto"
                                            name="contactbillto"
                                            label="Contact"
                                            value={values.contactbillto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.contactbillto}
                                            errors={errors.contactbillto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="phonebillto"
                                            name="phonebillto"
                                            label="Phone"
                                            value={values.phonebillto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.phonebillto}
                                            errors={errors.phonebillto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="faxbillto"
                                            name="faxbillto"
                                            label="Fax"
                                            value={values.faxbillto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.faxbillto}
                                            errors={errors.faxbillto}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} className={classes.rowContainer}>
                                <Grid container direction="column">
                                    <Grid item className={classes.rowHeader}>
                                        Ship To
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            component="textarea"
                                            required={false}
                                            disabled={false}
                                            id="address1shipto"
                                            name="address1shipto"
                                            label="Address 1"
                                            value={values.address1shipto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.selectTextField}
                                            touched={touched.address1shipto}
                                            errors={errors.address1shipto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            component="textarea"
                                            required={false}
                                            disabled={false}
                                            id="address2shipto"
                                            name="address2shipto"
                                            label="Address 2"
                                            value={values.address2shipto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.selectTextField}
                                            touched={touched.address2shipto}
                                            errors={errors.address2shipto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="cityshipto"
                                            name="cityshipto"
                                            label="City"
                                            value={values.cityshipto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.cityshipto}
                                            errors={errors.cityshipto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="zipshipto"
                                            name="zipshipto"
                                            label="Zip"
                                            value={values.zipshipto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.zipshipto}
                                            errors={errors.zipshipto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="contactshipto"
                                            name="contactshipto"
                                            label="Contact"
                                            value={values.contactshipto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.contactshipto}
                                            errors={errors.contactshipto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="phoneshipto"
                                            name="phoneshipto"
                                            label="Phone"
                                            value={values.phoneshipto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.phoneshipto}
                                            errors={errors.phoneshipto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={false}
                                            required={false}
                                            component="input"
                                            id="faxshipto"
                                            name="faxshipto"
                                            label="Fax"
                                            value={values.faxshipto}
                                            handleChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.inputField}
                                            touched={touched.faxshipto}
                                            errors={errors.faxshipto}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Grid container className={classes.buttonContainer}>
                                            <Grid item xs={3} className={classes.buttonItem}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    className={classes.buttonSubmit}
                                                >
                                                    save
                                                </Button>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Button
                                                    variant="outlined"
                                                    className={classes.button}
                                                    onClick={handleReset}
                                                >
                                                    cancel
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                </Box>
            </Grid>
            <Modal
                maxWidth={'xl'}
                title="Vendor Lookup"
                content={
                    <VendorLookup
                        vendorId={vendorId}
                        onChoose={onChoose}
                        setVendorLookupModalStatus={setLookupModalStatus}
                    />
                }
                modalStatus={lookupModalStatus}
                setModalStatus={setLookupModalStatus}
            />
        </Grid>
    );
};

export default withFormik<any, IAddFormValues>({
    mapPropsToValues: (props: IAddFormProps) => ({
        userid: props.user,
        search: '',
        vendorName: '',
        wimsub: '',
        email: '',
        contact: '',
        email3: '',
        vendorNumber: '',
        division: '',
        phone: '',
        fax: '',
        email2: '',
        address1billto: '',
        address1shipto: '',
        address2billto: '',
        address2shipto: '',
        citybillto: '',
        cityshipto: '',
        zipbillto: '',
        zipshipto: '',
        contactbillto: '',
        contactshipto: '',
        phoneshipto: '',
        phonebillto: '',
        faxbillto: '',
        faxshipto: '',
    }),
    validationSchema: Yup.object({
        vendorName: Yup.string().required('Required'),
        wimsub: Yup.string().required('Required'),
        email: Yup.string().email('Please enter valid email').required('Required'),
        vendorNumber: Yup.string().required('Required'),
        division: Yup.string().required('Required'),
    }),

    handleSubmit: (values, { props }) => {
        const data = {
            vendorName: values.vendorName,
            vendorNumber: values.vendorNumber,
            wimsub: values.wimsub,
            division: values.division,
            email: values.email,
            phone: values.phone,
            contact: values.contact,
            fax: values.fax,
            email2: values.email2,
            email3: values.email3,
            userId: values.userid,
            billTo: {
                address1: values.address1billto,
                address2: values.address2billto,
                city: values.citybillto,
                zip: values.zipbillto,
                contact: values.contactbillto,
                phone: values.phonebillto,
                fax: values.faxbillto,
            },
            shipTo: {
                address1: values.address1shipto,
                address2: values.address2shipto,
                city: values.cityshipto,
                zip: values.zipshipto,
                contact: values.contactshipto,
                phone: values.phoneshipto,
                fax: values.faxshipto,
            },
        };
        props.addVendor({ data });
        props.setModalStatus(false);
    },
})(AddVendorForm);
