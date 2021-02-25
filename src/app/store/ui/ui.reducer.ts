import { UIState, emptyState } from './ui.state';
import * as uiActions from './ui.actions';

export function uiReducer(state: UIState = emptyState, action: uiActions.Actions): UIState {

    switch (action.type) {
        case uiActions.SET_PAGELOADING: {
            return {
                ...state,
                pageIsLoaded: action.payload
            };
        }
        default: {
            return state;
        }
    }

}
