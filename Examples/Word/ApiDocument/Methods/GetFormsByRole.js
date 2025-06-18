// This example shows how to get a list of all forms in the document with the specified role.
let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Employee");
roles.Add("Chief");
let textForm = Api.CreateTextForm({"role" : "Employee", "key": "Employee FirstName", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let comboBoxForm = Api.CreateComboBoxForm({"role" : "Employee", "key": "Country", "tip": "Choose your country", "tag": "form_1", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddLineBreak();
paragraph.AddElement(comboBoxForm);

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
textForm = Api.CreateTextForm({"role" : "Chief", "key": "Chief FirstName", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
paragraph.AddElement(textForm);

let forms = doc.GetFormsByRole("Employee");
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Number of forms with role 'Employee': " + forms.length);

forms = doc.GetFormsByRole("Chief");
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Number of forms with role 'Chief': " + forms.length);
