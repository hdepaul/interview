export const SET_PAGELOADING = '[UI] Set Page Loading';

export class SetPageLoadingAction {
    readonly type = SET_PAGELOADING;
    constructor(public payload: boolean) {}
}

export type Actions = SetPageLoadingAction;
