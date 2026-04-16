// Get the internal id of the current form in a document.

// How to get an internal id of a signature form.

// Retrieve the internal id of a created signature form and display it.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let internalId = signatureForm.GetInternalId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + internalId);
doc.Push(paragraph);