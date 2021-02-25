import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/root/app.state';
import * as uiActions from '../../store/ui/ui.actions';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
	public errorCode$: Observable<string>;
	public refreshLink$: Observable<string>;

	constructor(
		private store: Store<AppState>,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.getErrorCode();
		this.store.dispatch(new uiActions.SetPageLoadingAction(false));
		
		this.errorCode$ = this.route.queryParams.pipe(
			map(p => {
				if (!p.status || p.status === '' || p.status === '0') {
					return '500';
				} else {
					return p.status;
				}
			})
		);

		this.refreshLink$ = this.route.queryParams.pipe(map(p => p.refreshUrl));
	}

	private getErrorCode() {
		this.route.queryParams.subscribe(params => {
			if (params.status && params.status !== '') {
				// this.errorCode.next(params.status);
			}
		});
	}

}
