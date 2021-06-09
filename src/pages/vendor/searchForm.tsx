import React from 'react';
import { withFormik, FormikProps, Form } from 'formik';
import { Grid, Button } from '@material-ui/core';
import FormComponent from '../../components/form-field/form-field';
import { useStyles } from './styles';

export interface ISearchFormValues {
    value: string;
    operator: string;
    searchBy: string;
}

interface ISearchFormProps {
    handleSearchClick: (values: ISearchFormValues) => void;
}
const SearchBy = [
    { id: 1, name: 'Vendor Number' },
    { id: 2, name: 'Vendor Name' },
    { id: 2, name: 'WIMSUB' },
];
const Operator = [
    { id: 1, name: '=' },
    { id: 2, name: 'Starts with' },
    { id: 3, name: 'Contains' },
];
const initialValues = {
    value: '',
    searchBy: SearchBy[0].name,
    operator: Operator[0].name,
};

const SearchForm = (props: ISearchFormProps & FormikProps<ISearchFormValues>) => {
    const { handleChange, handleBlur, values } = props;
    const classes = useStyles();
    return (
        <Form>
            <Grid container spacing={2} className={classes.formContainer}>
                <Grid item>
                    <FormComponent
                        disabled={false}
                        component="select"
                        id="searchBy"
                        selectOptions={SearchBy}
                        handleChange={handleChange}
                        name="searchBy"
                        onBlur={handleBlur}
                        className={classes.selectField}
                        value={values.searchBy}
                    />
                </Grid>
                <Grid item>
                    <FormComponent
                        disabled={false}
                        component="select"
                        id="operator"
                        selectOptions={Operator}
                        handleChange={handleChange}
                        name="operator"
                        onBlur={handleBlur}
                        value={values.operator}
                        className={classes.selectField}
                    />
                </Grid>
                <Grid item>
                    <FormComponent
                        disabled={false}
                        component="input"
                        id="value"
                        placeholder="Search"
                        name="value"
                        value={values.value}
                        handleChange={handleChange}
                        onBlur={handleBlur}
                        className={classes.input}
                    />
                </Grid>
                <Grid item>
                    <Button disableRipple type="submit" className={classes.button} color="primary" variant="contained">
                        Search
                    </Button>
                </Grid>
                <Grid item>
                    <Button disableRipple type="reset" className={classes.button} color="primary" variant="outlined">
                        Clear
                    </Button>
                </Grid>
            </Grid>
        </Form>
    );
};

export default withFormik<ISearchFormProps, ISearchFormValues>({
    mapPropsToValues: () => initialValues,
    handleSubmit: (values, { props }) => {
        props.handleSearchClick(values);
    },
})(SearchForm);
