import axios, { AxiosRequestConfig } from 'axios';
import { getAccessToken } from './getAccessToken';

const instance = axios.create({});

// Add a request interceptor
instance.interceptors.request.use(async function (config): Promise<AxiosRequestConfig> {
    try {
        const accessToken = await getAccessToken();
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    } catch (error) {
        //Handle Error
        return config;
    }
});

export default instance;
