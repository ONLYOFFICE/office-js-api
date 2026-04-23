// Assign a unique identifier to a signature field in a document.

// How do I label a signature field with a specific key so it can be referenced in a document?

// Tag a signature field with a custom name to link or group related fields in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetFormKey("Signature");
let key = signatureForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);