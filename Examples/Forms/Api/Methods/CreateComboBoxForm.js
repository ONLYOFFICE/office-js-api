// Create a dropdown list where users select from preset options in a document.

// How do I add a dropdown field to a document?

// Set up a selection menu with multiple choices that users can pick from in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({
	"key": "Personal information",
	"tip": "Choose your country",
	"required": true,
	"placeholder": "Country",
	"editable": false,
	"autoFit": false,
	"items": ["Latvia", "USA", "UK"]
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);