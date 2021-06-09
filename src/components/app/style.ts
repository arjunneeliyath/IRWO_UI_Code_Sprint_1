import { makeStyles } from '@material-ui/core';
import theme from '../../constants/theme';

export const containerStyles = makeStyles({
    root: {
        background: theme.palette.background.paper,
        padding: '0px 110px 20px 110px',
    },
    pageContent: {
        backgroundColor: theme.palette.background.default,
        padding: '20px',
    },
    cardTitle: {},
});
