// This example shows how to set the form role.

// How to set the role of a signature form.

// Add a role to the document, assign it to a signature form, and display the result.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Signatory");
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
signatureForm.SetRole("Signatory");
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let role = signatureForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
