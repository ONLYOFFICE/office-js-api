// Read the custom tag attached to a checkbox form in a document.

// How do I retrieve the tag value of a checkbox form in a document?

// Use a checkbox form's tag to categorize or identify the field during automated processing in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tag" : "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 1");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tag" : "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 2");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let tag = checkBoxForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);