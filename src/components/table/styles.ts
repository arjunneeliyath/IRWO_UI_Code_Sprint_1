import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        marginLeft: '2%',
        width: '96%',
        marginTop: 0,
        boxShadow: 'none',
    },
    container: {
        maxHeight: 344,
    },
    table: {
        // minWidth: 750
    },
    tableCell: {
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        background: '#FFFFFF',
        color: '#2C2A29',
    },
    vendorNumberCell: {
        color: '#00529F',
    },
    titleContainer: {
        borderTop: '1px solid rgba(224, 224, 224, 1)',
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        background: '#FFFFFF',
        fontWeight: 'bold',
        color: '#2C2A29',
    },
    gridContainer: {
        background: '#FFFFFF',
    },
    search: {
        display: 'flex',
        flexDirection: 'column',
    },
    select: {
        marginRight: '30px',
        marginBottom: '22px',
    },
    formContainer: {
        paddingLeft: '32px',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        marginRight: '5px',
        marginLeft: '2px',
    },
    paginationContainer: {
        flexShrink: 0,
    },
    pagination: {
        display: 'flex',
        marginRight: '30px',
    },
    refreshIcon: {
        width: '17px',
    },
    input: {
        position: 'relative',
        height: '40px',
        border: 'none',
        padding: '10px 18px 10px 18px',
        color: '#2C2A29',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 3px 6px #00000029',
    },
});
export default useStyles;
