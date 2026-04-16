// Set the form role in a document.

// How to set role for a complex form?

// Set role and display the result in a document.

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