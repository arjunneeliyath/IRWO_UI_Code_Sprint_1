import React from 'react';
import { Avatar, Grid, Menu, MenuItem, Tab, Tabs } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import { logo } from '../../assets/icons';
import { getUsernameLogo } from '../../utils/getUsername';
import routes from '../../constants/routes';
import { styles } from './styles';
import { useEffect } from 'react';

const Header = () => {
    const classes = styles();
    const { pathname } = useLocation();
    const initialValue = routes.find((route) => route.path === pathname)?.id;
    const [value, setValue] = React.useState(initialValue);
    const { accounts, instance } = useMsal();
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);
    let username;
    if (accounts[0]?.username) {
        username = getUsernameLogo(accounts[0]?.username);
    }
    const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = async () => {
        if (accounts[0]?.username) {
            const currentAccount = instance.getAccountByUsername(accounts[0].username);
            await instance.logoutRedirect({
                account: currentAccount,
                postLogoutRedirectUri: process.env.REACT_APP_REDIRECT_URI,
            });
        }
    };
    return (
        <div className={classes.header} role="header">
            <Grid container>
                <Grid item xs={2}>
                    <img src={logo} className={classes.logoContainer} />
                </Grid>
                <Grid item xs={7}>
                    <Tabs
                        classes={{ flexContainer: classes.tabs }}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {routes.map(
                            (tab) =>
                                tab.id && (
                                    <Link
                                        key={tab.id}
                                        className={value === tab?.id ? classes.linkSelected : classes.link}
                                        to={tab.path}
                                        onClick={() => setValue(tab.id)}
                                    >
                                        <Tab classes={{ root: classes.tab }} label={tab.title} />
                                    </Link>
                                )
                        )}
                    </Tabs>
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Avatar className={classes.avatar}>{username?.logo}</Avatar>
                    <div className={classes.username}>{username?.name}</div>
                </Grid>
            </Grid>
            <Menu
                classes={{ paper: classes.menuWrapper }}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
};
export default Header;
