import instance from '../constants/authentication/authProvider';

export const getUsernameLogo = (username: string) => {
    const account = instance.getAccountByUsername(username);
    const name = account?.name;
    const nameArr = name?.split(' ');
    // eslint-disable-next-line no-console
    return {
        logo: nameArr?.length ? nameArr[0][0] + nameArr[1][0] : 'AA',
        name: account?.name,
    };
};
