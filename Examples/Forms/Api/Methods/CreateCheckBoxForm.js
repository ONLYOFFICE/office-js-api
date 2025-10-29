// This example creates two radiobuttons and the checkbox.

// How to create a radiobutton or a checkbox form and add it to the paragraph.

// Add two radiobuttons and the checkbox to the ApiDocument object.

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
