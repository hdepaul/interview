export interface Interview {
    id: string;
    adminId: string;
    applicantid: string;
    businessId: string;
    businessUnitId: string;
    scheduleDateTime: Date;
}

export interface ScheduleSetup {
	scheduleDateTime: Date;
	scheduleDateTimeLabel: string;
    isSelected: boolean;
    cssclass: string;
}