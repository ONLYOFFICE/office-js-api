// This example shows how to get the placeholder text of the current form.

// How to get the placeholder text of a checkbox form.

// Retrieve the placeholder text of a created checkbox form and display it.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.SetPlaceholderText("Marital status");
let placeholderText = checkBoxForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
