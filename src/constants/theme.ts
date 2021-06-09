import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00529F',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F6F6F6',
        },
        secondary: {
            main: '#FFFFFF',
            light: '#0065FF',
        },
        text: {
            primary: '#2C2A29',
        },
    },
});

export default theme;
