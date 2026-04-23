// Read the role assigned to a checkbox form in a document.

// How do I find out the role of a checkbox form in a document?

// Determine the purpose or permission level of a checkbox form field before processing it in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 1");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 2");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let role = checkBoxForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);