import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewService } from "./interview-service";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
	]
})
export class ServicesModule {
	static forRoot(): ModuleWithProviders<ServicesModule> {
		return {
			ngModule: ServicesModule,
			providers: [	
				InterviewService
			]
			
		};
	}
}
