// This example shows how to set the form role.
let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Employee");
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
textForm.SetRole("Employee");
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let role = textForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + role);
doc.Push(paragraph);