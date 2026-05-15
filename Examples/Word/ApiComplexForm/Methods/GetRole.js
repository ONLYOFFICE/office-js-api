// Retrieve the assigned role of a complex form in a document.

// How do I check which role is assigned to a form in a document?

// Confirm that a form is linked to the correct signer or respondent role before sending the document.

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