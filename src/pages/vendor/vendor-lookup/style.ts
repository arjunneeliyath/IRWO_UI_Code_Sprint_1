import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    selectField: {
        height: '40px',
        width: '100%',
        color: theme.palette.text.primary,
        boxShadow: '0px 3px 6px #00000029',
        '& .MuiPaper-root': {
            marginTop: '60px',
        },
        '& .MuiSelect-select': {
            padding: '10px 26px 10px 12px',
            backgroundColor: theme.palette.background.default,
        },
        '& .MuiSelect-select:not([multiple]) option': {
            backgroundColor: theme.palette.background.default,
        },
    },
    input: {
        position: 'relative',
        height: '40px',
        border: 'none',
        padding: '10px 26px 10px 12px',
        color: '#2C2A29',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 3px 6px #00000029',
    },
    search: {
        display: 'flex',
        flexDirection: 'column',
    },
    buttonContainer: {
        marginTop: '19px',
    },
    formContainer: {
        padding: '0px 0px 25px 38px',
    },
    button: {
        height: '40px',
        marginTop: '20px',
        textTransform: 'none',
    },
    buttonSize: {
        height: '48px',
        width: '130px',
        marginRight: '-10px',
    },
    actionButton: {
        padding: theme.spacing(0),
    },
    actionGrid: {
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
    },
    tableCell: {
        paddingLeft: 8,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        background: '#FFFFFF',
        color: '#2C2A29',
        display: 'block',
        maxWidth: '20ch',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    vendorNumberCell: {
        color: '#00529F',
        cursor: 'pointer',
    },
    gridContainer: {
        background: '#FFFFFF',
    },
    footerButton: {
        float: 'right',
        marginRight: '35px',
    },
    lookupButtonsWrapper: {
        marginTop: '12px',
        marginBottom: '12px',
    },
}));
