// This example inserts a text box with the specified text box properties over the selected text.

// How to insert a text form with adding properties like tip text, placeholder, etc. to it.

// Add a text form with properties.

let textFormInsertPr = {
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "Name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false,
	"placeholderFromSelection": true,
	"keepSelectedTextInForm": false
};
doc.InsertTextForm(textFormInsertPr);
