// Assign a unique ID to a checkbox form in a document.

// Set a custom ID for a checkbox form to tell it apart from other forms in a document.

// Give a checkbox form an ID that is saved to the file, unlike the internal ID which can change after reopening.

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