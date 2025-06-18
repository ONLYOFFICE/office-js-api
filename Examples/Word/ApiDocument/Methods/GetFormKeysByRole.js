// This example shows how to get a list of all form keys attached to the specified role.
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

let keys = doc.GetFormKeysByRole("Employee");
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Form keys that need to be filled by 'Employee':");

keys.forEach(key => {
    paragraph.AddLineBreak();
    paragraph.AddText(key);
});
