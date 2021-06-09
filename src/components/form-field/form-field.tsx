import React from 'react';
import { TextField, FormLabel, Select, InputBase } from '@material-ui/core';
import { useStyles } from './style';

export interface ISelectOption {
    id: number;
    name: string;
}

interface IErrorData {
    errors?: string;
    touched?: boolean;
}

interface IFormProps {
    autoFocus?: boolean;
    value?: string;
    placeholder?: string;
    component?: 'input' | 'select' | 'textarea';
    id: string;
    className?: string;
    label?: string;
    name: string;
    selectOptions?: ISelectOption[];
    required?: boolean;
    disabled?: boolean;
    touched?: boolean;
    errors?: string;
    handleChange: (event: React.ChangeEvent<any>) => void;
    onBlur?: (event: React.FocusEvent<any>) => void;
    input?: React.ReactElement;
    defaultValue?: number;
}

const ErrorMessageComponent = (props: IErrorData) => {
    const classes = useStyles();
    if (props.touched && props.errors) {
        return <div className={classes.errorMessage}>{props.errors}</div>;
    } else {
        return <div>{''}</div>;
    }
};

const InputField = (props: IFormProps) => {
    const classes = useStyles();
    const {
        autoFocus,
        touched,
        errors,
        value,
        placeholder,
        id,
        handleChange,
        onBlur,
        className,
        label,
        required,
        disabled,
    } = props;
    return (
        <div>
            <FormLabel required={required} className={classes.labelField}>
                {label}
            </FormLabel>
            <br />
            <InputBase
                autoFocus={autoFocus}
                className={className}
                id={id}
                disabled={disabled}
                value={value}
                placeholder={placeholder ? placeholder : ''}
                onChange={handleChange}
                onBlur={onBlur}
                inputProps={{ 'aria-label': 'naked' }}
            />
            <br />
            <ErrorMessageComponent errors={errors} touched={touched} />
        </div>
    );
};

const TextareaField = (props: IFormProps) => {
    const classes = useStyles();
    const { label, touched, errors, disabled, required, handleChange, onBlur, className, placeholder, value, id } =
        props;
    return (
        <div>
            <FormLabel required={required} className={classes.labelField}>
                {label}
            </FormLabel>
            <br />
            <TextField
                disabled={disabled}
                multiline
                rows={1}
                rowsMax={10}
                value={value}
                id={id}
                variant="outlined"
                onChange={handleChange}
                placeholder={placeholder ? placeholder : ''}
                onBlur={onBlur}
                className={className}
                size="small"
            />
            <ErrorMessageComponent errors={errors} touched={touched} />
        </div>
    );
};
const SelectField = (props: IFormProps) => {
    const classes = useStyles();
    const {
        touched,
        value,
        errors,
        selectOptions,
        placeholder,
        className,
        label,
        name,
        input,
        required,
        disabled,
        handleChange,
        onBlur,
        defaultValue,
    } = props;
    return (
        <div>
            <FormLabel required={required} className={classes.labelField}>
                {label}
            </FormLabel>
            <br />
            <Select
                native
                variant="outlined"
                disabled={disabled}
                value={value}
                defaultValue={defaultValue ? defaultValue : placeholder}
                onChange={handleChange}
                name={name}
                onBlur={onBlur}
                className={className}
                input={input}
            >
                <optgroup className={classes.option}>
                    <option key={0} value={placeholder} disabled>
                        {placeholder}
                    </option>
                    {selectOptions &&
                        selectOptions.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                </optgroup>
            </Select>
            <br />
            <ErrorMessageComponent errors={errors} touched={touched} />
        </div>
    );
};

const FormComponent = (props: IFormProps) => {
    const { component, selectOptions = [], ...rest } = props;
    switch (component) {
        case 'input':
            return InputField({ ...rest });
        case 'select':
            return SelectField({ selectOptions, ...rest });
        case 'textarea':
            return TextareaField({ ...rest });
        default:
            return null;
    }
};
export default FormComponent;
