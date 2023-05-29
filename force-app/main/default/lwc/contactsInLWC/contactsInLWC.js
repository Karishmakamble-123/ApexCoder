import { LightningElement, wire } from "lwc"
import FIRST_NAME_FIELD from "@salesforce/schema/Contact.FirstName"
import LAST_NAME_FIELD from "@salesforce/schema/Contact.LastName"
import PHONE_FIELD from "@salesforce/schema/Contact.Phone"
import EMAIL_FIELD from "@salesforce/schema/Contact.Email"
import getContacts from "@salesforce/apex/ContactController.getContacts"


const COLUMNS = [{ label: "First Name", fieldName: FIRST_NAME_FIELD.fieldApiName, type: "text" },
	{ label: "Last Name", fieldName: LAST_NAME_FIELD.fieldApiName, type: "text" },
	{ label: "Phone", fieldName: PHONE_FIELD.fieldApiName,type: "phone"},
	{ label: "Email", fieldName: EMAIL_FIELD.fieldApiName, type: "email" },
]

export default class GetContacts extends LightningElement {
	columns = COLUMNS
	// @wire(getContacts)
	contacts;
    isDisabled=false;
	connectedCallback() {}
	renderedCallback() {
		console.log(this.contacts)
	}

	handleClick(event) {
		console.log("Button CLicked")
		console.log(JSON.stringify(event.target))
		
        getContacts({
            orderby :"FirstName"
        })
			.then((data) => {
				console.log("Server returned response")
				console.log(data)
				this.contacts = data
				// code to execute if create operation is successful
			})
			.catch((error) => {
				// code to execute if create operation is not successful
			})
		}
	}