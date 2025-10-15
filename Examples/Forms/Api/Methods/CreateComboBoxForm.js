// This example creates a combo box form with the common and specific combo box form properties.

// How to create a combo box form and add it to the paragraph.

// Add a combo box with the state options to the ApiDocument object.

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
