import { AnyAction, applyMiddleware, combineReducers, compose, createStore, Dispatch, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas/index';
import vendorReducer, { IVendorReducer } from './vendor';
import statusReducer, { IStatusReducer } from './status';
import { commonReducer, ICommonReducer } from './common';

export interface IReduxState {
    status: IStatusReducer;
    vendor: IVendorReducer;
    common: ICommonReducer;
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadState = composeEnhancers(applyMiddleware(sagaMiddleware));
const store: Store<IReduxState, AnyAction> & {
    dispatch: Dispatch;
} = createStore(combineReducers({ status: statusReducer, vendor: vendorReducer, common: commonReducer }), preloadState);
sagaMiddleware.run(rootSaga);

export default store;
