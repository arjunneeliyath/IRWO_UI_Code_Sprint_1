import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    boxStyle: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
    },
    heading: {
        fontSize: '18px',
        margin: '15px 0px 15px 0px',
    },
    inputField: {
        margin: '10px 0px 10px 0px',
        width: '100%',
        border: 'solid',
        height: '40px',
        borderWidth: 'thin',
        borderRadius: '5px',
        borderColor: '#B1B1B1',
        padding: '10px 26px 10px 12px',
    },
    selectTextField: {
        height: '40px',
        margin: '10px 0px 10px 0px',
        width: '100%',
    },
    rowContainer: {
        padding: '2%',
    },
    rowHeader: {
        marginBottom: '20px',
    },
    rowHeaderNoContent: {
        marginTop: '40px',
    },
    lookupIcon: {
        height: '13px',
        marginRight: '5px',
    },
    buttonLookUp: {
        marginTop: '30px',
        height: '40px',
        marginLeft: '10px',
        width: '90%',
        textTransform: 'none',
        backgroundColor: '#00529F',
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        marginTop: '10px',
    },
    buttonItem: {
        marginRight: '10px',
    },
    buttonSubmit: {
        width: '100%',
        backgroundColor: '#00529F',
        color: 'white',
    },
    button: {
        width: '100%',
        color: '#00529F',
        borderColor: '#00529F',
    },
});
