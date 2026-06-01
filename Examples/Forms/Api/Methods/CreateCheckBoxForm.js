// Add checkboxes and radio buttons for multiple choice questions in a document.

// How do I insert checkboxes or radio buttons in a document?

// Create selectable options that let users pick from predefined choices in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

let checkBoxForm = Api.CreateCheckBoxForm({
	"key": "Marital status",
	"tip": "Specify your marital status",
	"required": true,
	"placeholder": "Marital status",
	"radio": true
});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();

checkBoxForm = Api.CreateCheckBoxForm({
	"key": "Marital status",
	"tip": "Specify your marital status",
	"required": true,
	"placeholder": "Marital status",
	"radio": true
});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
paragraph.AddLineBreak();

checkBoxForm = Api.CreateCheckBoxForm({
	"key": "Children",
	"tip": "Indicate if you have children",
	"required": false,
	"placeholder": "Children",
	"radio": false
});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");