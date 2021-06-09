import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import store from './modules/store';
import { MsalProvider } from '@azure/msal-react';
import msalInstance from './constants/authentication/authProvider';
import { ThemeProvider } from '@material-ui/styles';
import theme from './constants/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <MsalProvider instance={msalInstance}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MsalProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
