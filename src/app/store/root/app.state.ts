import { UIState } from '../ui/ui.state';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from '../router/router.state';

export interface AppState {
    uiData: UIState;
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}