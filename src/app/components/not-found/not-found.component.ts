import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/root/app.state';
import * as uiActions from '../../store/ui/ui.actions';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
	private homePageLink: BehaviorSubject<string> = new BehaviorSubject<string>('/Workfile');
	private refreshLink: BehaviorSubject<string> = new BehaviorSubject<string>('');
	private errorCode: BehaviorSubject<string> = new BehaviorSubject<string>('404');

	public homePageLink$: Observable<string> = this.homePageLink.asObservable();
    public errorCode$: Observable<string> = this.errorCode.asObservable();
	public refreshLink$: Observable<string> = this.refreshLink.asObservable();
	
	constructor(
		private store: Store<AppState>,
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
		this.getErrorCode();
		this.store.dispatch(new uiActions.SetPageLoadingAction(false));
    }
	
	private getErrorCode() {
        this.route.queryParams.subscribe(params => {
            if (params.status && params.status !== '') {
                this.errorCode.next(params.status);
            }
        });
    }

}
