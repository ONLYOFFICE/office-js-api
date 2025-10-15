// This example inserts a text box with the specified text box properties over the selected text.

// How to create a text form with its properties and insert it into the ApiDocument object.

// Create the ApiTextForm object and insert it into the document using the specified properties.

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
