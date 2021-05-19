import {Directive, Component, OnInit} from '@angular/core';
import ContactForm from "../../Models/ContactForm";

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

	contactForm: ContactForm = new ContactForm(null, null, null, null, null);

	submitted: boolean = false;

	constructor() {
	}

	OnSubmit(): void {
		fetch('/', {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: this.CreateURLSearchParams().toString()
		})
			.then(() => this.submitted = true)
			.catch((error) => alert(error));
	}

	CreateURLSearchParams(): URLSearchParams {
		const urlSearchParams = new URLSearchParams();
		if (this.contactForm.Name !== null) urlSearchParams.append("Name", this.contactForm.Name)
		if (this.contactForm.Email !== null) urlSearchParams.append("Email", this.contactForm.Email)
		if (this.contactForm.Role !== null) urlSearchParams.append("Name", this.contactForm.Role)
		if (this.contactForm.Phone !== null) urlSearchParams.append("Phone", this.contactForm.Phone)
		if (this.contactForm.Message !== null) urlSearchParams.append("Message", this.contactForm.Message)
		return urlSearchParams;
	}

	ngOnInit(): void {
	}
}
