// Apply a border color to checkbox forms in a document.

// How do I change the border color of a checkbox form in a document?

// Visually distinguish checkboxes by combining a colored border with a contrasting background fill in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.SetBorderColor(Api.HexColor('#FF6F3D'));
checkBoxForm.SetBackgroundColor(Api.HexColor('#FFFF00'));
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.SetBorderColor(Api.HexColor('#FF6F3D'));