// Get the form role in a document.

// How to get the role of a signature form.

// Retrieve the role of a created signature form and display it.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let role = signatureForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);