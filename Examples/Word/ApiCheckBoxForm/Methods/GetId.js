// Read the ID assigned to a checkbox form in a document.

// Check the ID that was set for a checkbox form with the SetId method in a document.

// Display the checkbox form ID that is saved to the file and stays the same after the document is reopened.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.SetId(1001);
let formId = checkBoxForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);