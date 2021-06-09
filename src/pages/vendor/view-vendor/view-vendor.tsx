import React from 'react';
import * as Yup from 'yup';
import { withFormik, Form, FormikProps } from 'formik';
import FormComponent, { ISelectOption } from '../../../components/form-field/form-field';
import { Grid, Box } from '@material-ui/core';
import { useStyles } from './style';
import { IVendorGetResponse } from '../../../interfaces/vendor/get-Vendor';

interface IViewFormProps {
    divisions: ISelectOption[];
    user: string;
    vendorDetails: IVendorGetResponse;
}

interface IViewFormValues {
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

const ViewVendorForm = (props: IViewFormProps & FormikProps<IViewFormValues>) => {
    const { handleChange, handleBlur, values, touched, errors, divisions } = props;

    const classes = useStyles();

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
                                            disabled={true}
                                            required={false}
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
                                            disabled={true}
                                            required={false}
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
                                        <Grid container></Grid>
                                    </Grid>
                                    <Grid item>
                                        <FormComponent
                                            disabled={true}
                                            required={false}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
                                            required={false}
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
                                            disabled={true}
                                            required={false}
                                            component="select"
                                            label="Division"
                                            id="division"
                                            selectOptions={divisions}
                                            defaultValue={Number(values.division)}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                            disabled={true}
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
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default withFormik<any, IViewFormValues>({
    mapPropsToValues: (props: IViewFormProps) => ({
        userid: props.user,
        search: '',
        vendorName: props.vendorDetails.vendorName,
        wimsub: props.vendorDetails.wimsub,
        email: props.vendorDetails.email,
        contact: props.vendorDetails.contact,
        email3: props.vendorDetails.email3,
        vendorNumber: props.vendorDetails.vendorNumber,
        division: props.vendorDetails.division,
        phone: props.vendorDetails.phone,
        fax: props.vendorDetails.fax,
        email2: props.vendorDetails.email2,
        address1billto: props.vendorDetails.billTo.address1,
        address1shipto: props.vendorDetails.shipTo.address1,
        address2billto: props.vendorDetails.billTo.address2,
        address2shipto: props.vendorDetails.shipTo.address2,
        citybillto: props.vendorDetails.billTo.city,
        cityshipto: props.vendorDetails.shipTo.city,
        zipbillto: props.vendorDetails.billTo.zip,
        zipshipto: props.vendorDetails.shipTo.zip,
        contactbillto: props.vendorDetails.billTo.contactName,
        contactshipto: props.vendorDetails.shipTo.contactName,
        phoneshipto: props.vendorDetails.shipTo.phone,
        phonebillto: props.vendorDetails.billTo.phone,
        faxbillto: props.vendorDetails.billTo.fax,
        faxshipto: props.vendorDetails.shipTo.fax,
    }),
    validationSchema: Yup.object({
        vendorName: Yup.string().required('Required'),
        wimsub: Yup.string().required('Required'),
        email: Yup.string().email('Please enter valid email').required('Required'),
        vendorNumber: Yup.string().required('Required'),
        division: Yup.string().required('Required'),
    }),

    handleSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
    },
})(ViewVendorForm);
