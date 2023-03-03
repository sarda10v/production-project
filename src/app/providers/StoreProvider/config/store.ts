import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { useDispatch } from 'react-redux';
import { NavigateOptions, To } from 'react-router-dom';
import { $api } from 'shared/api/api';
// import { loginReducer } from 'features/AuthByUsername';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
