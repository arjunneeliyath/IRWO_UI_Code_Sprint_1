const SearchBy = [
    { id: 1, name: 'Vendor Number' },
    { id: 2, name: 'Vendor Name' },
    { id: 3, name: 'WIMSUB' },
];
const Operator = [
    { id: 1, name: '=' },
    { id: 2, name: 'Starts with' },
    { id: 3, name: 'Contains' },
];

export const InitialValues = {
    value: '',
    searchBy: SearchBy[0].name,
    operator: Operator[0].name,
};

export const formFields = {
    vendorLookup: [
        {
            disabled: false,
            component: 'input',
            id: 'value',
            name: 'value',
            selectOptions: [],
            defaultValue: '',
            className: 'input',
            placeholder: 'Select-a-value',
        },
        {
            type: 'submit',
            id: 'submit-button',
            isButton: true,
            name: 'Search',
            color: 'primary',
            variant: 'contained',
        },
    ],
    vendor: [
        {
            disabled: false,
            component: 'select',
            id: 'searchBy',
            name: 'searchBy',
            selectOptions: SearchBy,
            defaultValue: SearchBy[0].name,
            className: 'selectField',
            placeholder: 'Select-a-value',
        },
        {
            disabled: false,
            component: 'select',
            id: 'operator',
            name: 'operator',
            selectOptions: Operator,
            defaultValue: Operator[0].name,
            className: 'selectField',
            placeholder: 'Select-a-value',
        },
        {
            disabled: false,
            component: 'input',
            id: 'value',
            name: 'value',
            selectOptions: [],
            defaultValue: '',
            className: 'input',
            placeholder: 'Search',
        },
        {
            type: 'submit',
            id: 'submit-button',
            isButton: true,
            name: 'Search',
            color: 'primary',
            variant: 'contained',
        },
        {
            type: 'reset',
            id: 'reset-button',
            isButton: true,
            name: 'Clear',
            color: 'primary',
            variant: 'outlined',
        },
    ],
};
