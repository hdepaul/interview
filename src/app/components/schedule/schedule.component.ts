import { Component, Input, OnInit } from '@angular/core';
import { add, set } from 'date-fns'
import { utcToZonedTime, format } from 'date-fns-tz'
import { InterviewService } from "../../services/interview-service";

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
	selectedDate = new Date();
	selectedSchedule = new Date();
	selectedScheduleLabel: string = '';
	startAt = new Date();
	minDate = new Date();
	maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
	year: any;
	dayAndDate: string;
	items: ScheduleSetup[] = [];
	loadingInProgress = true;

	@Input() duration: number = 30;
	@Input() personId: string = 'Default Id';
	@Input() personName: string = 'Default Name';

	constructor(
		private interviewService: InterviewService
	) {	}

	ngOnInit(): void {
		this.onSelect(this.selectedDate);
	}

	onSelect(event) {
		this.selectedDate = event;
		this.dayAndDate = format(event, 'EEEE, MMMM d');
		this.items = [];
		this.setLoading(true);
		this.interviewService.getTimeSlots(format(this.selectedDate,'yyyy-MM-dd'), this.duration)
			.subscribe(tl => {
				this.formatAvailableTimeSlots(tl);
				this.setLoading(false);
			});
	}

	formatAvailableTimeSlots(timeSlots: Date[]) {
		timeSlots.forEach(el => {
			this.items.push({
				scheduleDateTime: el,
				scheduleDateTimeLabel: format(new Date(el), 'hh:mm aa'),
				isSelected: false,
				cssclass: ''
			});
		});

	}

	myDateFilter = (d: Date): boolean => {
		const day = d.getDay();
		// Prevent Saturday and Sunday from being selected.
		return day !== 0 && day !== 6;
	}

	setHour(selected: ScheduleSetup) {
		this.items.forEach(el => {
			el.isSelected = false;
		});
		selected.isSelected = true;
		this.selectedSchedule = selected.scheduleDateTime;
		this.selectedScheduleLabel = format(selected.scheduleDateTime, 'EEEE, MMMM d - hh:mm aa - OOOO')
	}

	setLoading(isLoading: boolean) {
        this.loadingInProgress = isLoading;
    }
   
}

export interface ScheduleSetup {
	scheduleDateTime: Date;
	scheduleDateTimeLabel: string;
	isSelected: boolean;
	cssclass: string;
}
