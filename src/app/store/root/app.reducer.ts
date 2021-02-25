import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { AppState } from './app.state';
import { uiReducer } from '../ui/ui.reducer';
import * as fromRouter from '@ngrx/router-store';

export const reducers: ActionReducerMap<AppState> = {
    uiData: uiReducer,
    router: fromRouter.routerReducer,
}