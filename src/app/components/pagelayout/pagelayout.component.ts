import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/root/app.state';
import * as uiActions from '../../store/ui/ui.actions';
import { delay } from 'rxjs/operators';

@Component({
	selector: 'app-pagelayout',
	templateUrl: './pagelayout.component.html',
	styleUrls: ['./pagelayout.component.scss']
})
export class PagelayoutComponent implements OnInit {
	private minute = 1000 * 3;
	constructor(
		private store: Store<AppState>
	) { }

	ngOnInit(): void {
		/*this.store.dispatch(new uiActions.SetPageLoadingAction(true));

		const initLoad: Observable<boolean> = of(true)
			.pipe(delay(2000));

		initLoad.subscribe(() => {
			this.store.dispatch(new uiActions.SetPageLoadingAction(false))
		}); */
	}

}
