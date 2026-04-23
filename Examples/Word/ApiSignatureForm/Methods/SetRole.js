// Assign a role to a signature field in a document.

// How do I specify who is responsible for signing a particular signature field in a document?

// Label a signature field with a named role to indicate the intended signer in a document.

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