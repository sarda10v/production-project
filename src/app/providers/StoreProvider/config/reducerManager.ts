import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

// ИСПОЛЬЗОВАНИЕ «МЕНЕДЖЕРА РЕДЬЮСЕРОВ:
export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKey> = [];
    // ↑ массив, который хранит в себе название редюсеров, которые мы хотим удалить;

    return {
        getReducerMap: () => reducers, // ← getReducerMap - функция, которая возвращает редюсеры;

        reduce: (state: StateSchema, action: AnyAction) => {
            // ↑ функция reducer, она аргументом принимает state и action (как и обычный редюсер), но есть одно условие,
            // если у нас в массиве для удаления есть какие-либо ключи, то мы эти ключи из стейта польностью удаляем;
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key]; // ← по ключу удаляем редюсер;
                });

                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            // ↑ функция add, которая добавляет в редюсер по ключу новый редюсер;
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKey) => {
            // ↑ функция remove, которая добавляет ключ в массив и удаляет этот ключ из редюсера;
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
