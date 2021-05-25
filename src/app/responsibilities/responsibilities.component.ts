import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-responsibilities',
	templateUrl: './responsibilities.component.html',
	styleUrls: ['./responsibilities.component.scss']
})
export class ResponsibilitiesComponent implements OnInit {

	@Input() responsibilities: string = '';
	responsibilitiesList: string[] = []

	isShown = false;

	constructor() {
	}

	ngOnInit(): void {
		this.responsibilitiesList = this.responsibilities?.split('\n')
	}

	showHideText(): string {
		return this.isShown ? "Hide Responsibilities" : "Show Responsibilities";
	}

	hideResp(): void {
		this.isShown = !this.isShown;
	}
}
