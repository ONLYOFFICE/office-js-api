// This example sets the placeholder text to the current form.

// How to add a text as a placeholder to the form.

// Set a placeholder text to the form.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 1");
checkBoxForm.SetPlaceholderText("Form 1");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 2");
checkBoxForm.SetPlaceholderText("Form 2");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let formKey = checkBoxForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + formKey);
doc.Push(paragraph);