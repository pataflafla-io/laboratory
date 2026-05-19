import { RootState } from "@/store";
import { Dispatch, Action, MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

export const localstorageMiddleware = (state: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    // next(action);
    // if (action.type.includes('apodFavorites/toggleFavorite')) {
    //     const { apodFavorites } = state.getState() as RootState;
    //     localStorage.setItem('apodFavorites', JSON.stringify(apodFavorites))
    // }

    // return;
}

export const loggerMiddleware: Middleware<{}, RootState> = storeApi => next => action => {
    // storeApi.getState() is now correctly typed as RootState
    console.log('Dispatching action:', action);
    console.log('Current state:', storeApi.getState());

    const result = next(action);

    console.log('Next state:', storeApi.getState());
    return result;
};
