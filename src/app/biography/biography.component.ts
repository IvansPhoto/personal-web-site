import {Component, OnInit} from '@angular/core';
import Job from "../../Models/IJob";

@Component({
	selector: 'app-biography',
	templateUrl: './biography.component.html',
	styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

	Jobs: Job[] = []

	constructor() {
	}

	ngOnInit(): void {
		this.Jobs = [
			{
				Id: 1,
				Company: "JSC “VBF”",
				Start: "2010-07-01",
				End: "2010-10-01",
				Location: "Russia, Vologda",
				Position: "Quality manager",
				ShortDescription: "Quality control and improvement of the quality management system.",
				Responsibilities: "Control of the production process for meeting the requirements of system quality management ISO 9001. Improvement of the quality management system."
			},
			{
				Id: 2,
				Company: "Gazmarket and K LLC",
				Start: "2012-04-01",
				End: "2014-02-01",
				Location: "Russia, Vologda",
				Position: "Engineer of sale department",
				ShortDescription: "Sale air screw compressors and air treatment equipment.",
				Responsibilities: "It was my first real job with the combined responsibilities of a sales manager and an engineer. \nThis company was a manufacturer of equipment containers and a trader of screw air compressors. \n• Selling screw air compressors and air-prepared equipment. \n• Finding new clients and making client base from “Zero” through cold calls, presentations, and meetings.\n• Making documentation on own products (equipment containers).\n• Preparing documentation for tenders on equipment containers.\n• Solving reclamations on own products and finding a decision of a problem."
			},
			{
				Id: 3,
				Company: "Effective technology LLC.",
				Start: "2014-02-01",
				End: "2016-10-01",
				Location: "Russia, Vologda",
				Position: "Regional sales representative",
				ShortDescription: "Sale and promote geodetic equipment in a region.",
				Responsibilities: "Promoting and sales geodesic equipment (Leica Geosystems and own brand EFT) on the Vologda region. \nMy general responsibilities included:\n- Finding new clients (cold calling), figuring out the needs, plans and capabilities of potential customers. Preparing a technical task and controlling its immutability during the whole deal.\n- Selecting the most suitable equipment to solve client tasks. Making a presentation considering the client’s desires, fears and expectations.\n- Presentation of our solutions for customers. Fulfilling demonstrations of work of our equipment in the field in comparison with our competitors.\n- Item2 following a client: from the first contact to commissioning equipment with after-sales support providing technical consultations.\n- Figuring out the suggestion of improvement and complaints about the equipment of our brand EFT.\n\nI organized two common regional seminars and one specialized for promoting the equipment of our brand and company’s services; I had public speeches for 35-55 persons.\nMy work process was organized by myself independently including prioritizing tasks and my work schedule.\nAll the activities of our competitors and deals from hand-to-hand between our clients were under control."
			}
		]
	}

}
