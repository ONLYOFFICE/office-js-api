// Assign a role to a complex form in a document.

// How do I set the role of a form in a document?

// Restrict form filling to a specific group of participants by assigning a named role.

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