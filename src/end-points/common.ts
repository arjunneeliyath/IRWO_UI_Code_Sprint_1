import { IDivisionsRequest } from '../interfaces/common/get-division';
import { getDivisionsResponse } from '../mocks/common-endpoint-mock';
import { mockPromise } from '../utils/mock-promise';

//TODO: This comments will be removed while integrating the real APIs.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDivisionsAPI = (value: IDivisionsRequest) => {
    return mockPromise(getDivisionsResponse);
};
