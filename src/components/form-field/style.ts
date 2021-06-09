import { makeStyles } from '@material-ui/core/styles';
import theme from '../../constants/theme';

export const useStyles = makeStyles({
    errorMessage: {
        color: 'red',
        fontSize: '12px',
    },
    labelField: {
        color: theme.palette.text.primary,
        '& .MuiFormLabel-asterisk': {
            color: 'red',
        },
    },
    option: {
        backgroundColor: 'white',
    },
});
