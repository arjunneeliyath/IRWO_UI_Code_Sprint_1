import { makeStyles } from '@material-ui/core';

export const styles = makeStyles((theme) => ({
    header: {
        height: 60,
        width: '100%',
        display: 'flex',
        marginBottom: 25,
        padding: '0 110px 0 110px',
    },
    logoContainer: {
        height: '32px',
        marginTop: '25px',
        '@media (max-width:1200px)': {
            width: '100%',
        },
    },
    tabs: {
        height: 70,
        marginTop: '23px',
        marginLeft: '30px',
    },
    avatar: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        marginTop: '25px',
        left: '19px',
    },
    username: {
        marginLeft: '65px',
        marginTop: '-30px',
    },
    menuWrapper: {
        marginTop: theme.spacing(6),
    },
    link: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        textTransform: 'none',
        width: '112px',
    },
    linkSelected: {
        color: theme.palette.primary.main,
        textDecoration: 'underline',
        textUnderlineOffset: '5px',
    },
    tab: {
        textTransform: 'none',
        minWidth: theme.spacing(10),
        width: theme.spacing(14),
    },
}));
