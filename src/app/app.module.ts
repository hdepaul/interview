import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomSerializer } from './store/router/router.serializer';
import { HttpClientModule } from '@angular/common/http';
import { effects, reducer } from './store';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { ServicesModule } from './services/services.module';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PagelayoutComponent} from './components/pagelayout/pagelayout.component'
import { ScheduleComponent} from './components/schedule/schedule.component'
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer, DefaultRouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		ErrorComponent,
		NotFoundComponent,
		LoadingComponent,
		PagelayoutComponent,
		ScheduleComponent,
		FooterComponent	
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		SharedModule,
		AngularMaterialModule,
		ServicesModule.forRoot(),
		AppRoutingModule,
		StoreModule.forRoot(reducer, {
			runtimeChecks: {
				// strictStateImmutability: false, 
				// strictActionImmutability: false,
			}
		}),

		StoreRouterConnectingModule.forRoot({ serializer: DefaultRouterStateSerializer, stateKey: 'router' }),
		EffectsModule.forRoot(effects),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
            name: 'Schedule Interview',
            logOnly: environment.production
        }),
		FontAwesomeModule,
	],
	providers: [
		{
            provide: RouterStateSerializer,
            useClass: CustomSerializer
        }
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
