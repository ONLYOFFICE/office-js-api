// This example creates a a text form with the common and specific text form properties.

// How to create a text form with adding properties like tip text, placeholder, etc. to it.

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
