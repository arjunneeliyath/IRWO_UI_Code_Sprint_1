import React from 'react';
import { withFormik, FormikProps, Form } from 'formik';
import FormComponent from '../../components/form-field/form-field';
import { Grid, Button } from '@material-ui/core';
import { InitialValues } from '../../constants/vendor/search-form-fields';
import { useStyles } from './styles';

export interface IVendorSearchFormValues {
    value?: string;
    searchBy: string;
    operator: string;
}

type IValues = 'value' | 'searchBy' | 'operator';
type IClasses =
    | 'selectField'
    | 'button'
    | 'input'
    | 'search'
    | 'buttonContainer'
    | 'formContainer'
    | 'buttonSize'
    | 'actionButton'
    | 'actionGrid';

interface OtherProps {
    handleSearchClick: (values: IVendorSearchFormValues) => void;
    formFields: any;
    defaultValue?: string;
}
const VendorSearchForm = (props: OtherProps & FormikProps<IVendorSearchFormValues>) => {
    const { handleChange, handleBlur, values, formFields } = props;
    const buttonComponents: any = formFields.filter((x: any) => x.isButton);
    const otherComponents: any = formFields.filter((x: any) => !x.isButton);
    const classes = useStyles();
    return (
        <Form>
            <Grid container spacing={2} className={classes.formContainer}>
                {otherComponents?.map((item: any) => {
                    const selectedValue = values[item.name as IValues];
                    const classesType = classes[item.className as IClasses];
                    return (
                        <Grid item key={'grid' + item.id}>
                            <FormComponent
                                key={item.id}
                                disabled={item.disabled}
                                component={item.component}
                                id={item.id}
                                handleChange={handleChange}
                                name={item.id}
                                onBlur={handleBlur}
                                className={classesType}
                                value={selectedValue}
                                selectOptions={item?.selectOptions}
                                // defaultValue={Operator[0].name}
                                // input={<BootstrapInput />}
                                placeholder={item.placeholder}
                            />
                        </Grid>
                    );
                })}
                {buttonComponents?.map((item: any) => (
                    <Grid item key={item.id}>
                        <Button
                            key={item.id}
                            disableRipple
                            type={item.type}
                            className={classes.button}
                            color={item.color}
                            variant={item.variant}
                        >
                            {item.name}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Form>
    );
};

// Wrap our form with the withFormik HoC
export default withFormik<OtherProps, IVendorSearchFormValues>({
    mapPropsToValues: (props: OtherProps) => ({
        value: props.defaultValue || InitialValues.value,
        operator: InitialValues.operator,
        searchBy: InitialValues.searchBy,
    }),
    handleSubmit: (values, { props }) => {
        props.handleSearchClick(values);
    },
})(VendorSearchForm);
