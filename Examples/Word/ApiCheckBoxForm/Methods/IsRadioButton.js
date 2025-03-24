// This example checks if the current checkbox is a radio button.

// How to know whether the checkbox form is radio button.

// Get a boolean value representing whether a current form is a radio button or not.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let radioButton = checkBoxForm.IsRadioButton();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document is a radio button: " + radioButton);
doc.Push(paragraph);