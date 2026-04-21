// Create a text form and add it to the document paragraph.

// Set text form properties and add the form to the document.

// Add a text form to the document object, set its properties like characters limit, etc.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "First name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);