// This example shows how to set the form role.
let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Visitor");
let paragraph = doc.GetElement(0);
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms", "required": true, "placeholder": "Complex form"});
complexForm.AddText("First");
complexForm.SetRole("Visitor")
paragraph.AddElement(complexForm);
let role = complexForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);