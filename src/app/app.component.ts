import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './store/root/app.state';
import { UIState } from './store/ui/ui.state';
import { share } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
    public uiState;
    public uiState$: Observable<UIState>;

    constructor(
        private store: Store<AppState>,
    ) { }

    ngOnInit(): void {
        this.uiState$ = this.store.select(state => state.uiData).pipe(share());
        this.uiState$.subscribe((uiState) => {
            this.uiState = uiState;
        });
    }
}
