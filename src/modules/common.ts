import { AnyAction } from 'redux';
import { IDivisionsRequest, IDivisionsResponse } from '../interfaces/common/get-division';

export const GET_DIVISIONS = 'GET_DIVISIONS';
export const GET_DIVISIONS_SUCCESS = 'GET_DIVISIONS_SUCCESS';

export const getDivisionsAction = (value: IDivisionsRequest) => ({
    type: GET_DIVISIONS,
    value,
});

export const getDivisionsSuccessAction = (value: IDivisionsResponse) => ({
    type: GET_DIVISIONS_SUCCESS,
    value,
});

export interface ICommonReducer {
    divisions: IDivisionsResponse;
}

const commonReducerInit = {
    divisions: {},
};

export const commonReducer = (state = commonReducerInit, action: AnyAction) => {
    switch (action.type) {
        case GET_DIVISIONS_SUCCESS:
            return {
                ...state,
                divisions: {
                    ...action.value,
                },
            };
    }
    return state;
};
