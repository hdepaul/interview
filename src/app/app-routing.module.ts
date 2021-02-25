import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorComponent } from './components/error/error.component';
import { PagelayoutComponent} from './components/pagelayout/pagelayout.component'

const ROUTES: Routes = [
	{
		path: 'interview',
		component: PagelayoutComponent,
	},
	{
		path: '404',
		component: NotFoundComponent
	},
	{
		path: 'error',
		component: ErrorComponent
	},
	{ 
		path: '',   
		redirectTo: 'interview', 
		pathMatch: 'full' },
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES) 
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }
