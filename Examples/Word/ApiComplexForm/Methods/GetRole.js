// This example shows how to get the form role.
let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
let paragraph = doc.GetElement(0);
let complexForm = Api.CreateComplexForm({"key": "Complex1", "role" : "Customer"});
complexForm.Add("Name");
paragraph.AddElement(complexForm);
let role = complexForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);