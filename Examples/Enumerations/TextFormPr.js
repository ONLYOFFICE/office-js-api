// Create a text form specifying its common and specific properties.

// Set text form properties like tip text, placeholder, and characters limit.

// Create a text form with properties.

let textFormPr = {
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "First name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
};
let textForm = Api.CreateTextForm(textFormPr);
