// Read whether a checkbox form is currently checked in a document.

// How do I find out if a checkbox form is checked in a document?

// Confirm the checked state of a specific radio button after programmatically selecting it in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.SetChecked(true);
let checked = checkBoxForm.IsChecked();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second radio button from this document is checked: " + checked);
doc.Push(paragraph);