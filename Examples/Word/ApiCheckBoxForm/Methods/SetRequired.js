// This example specifies if the form should be required.

// How to make the form required.

// Require a form in the document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.SetRequired(true);
let isRequired = checkBoxForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document is required: " + isRequired);
doc.Push(paragraph);