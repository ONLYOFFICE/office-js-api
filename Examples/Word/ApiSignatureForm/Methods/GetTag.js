// Read the tag attached to a signature form in a document.

// How do I find out what tag is assigned to a signature form in a document?

// Confirm the custom label stored on a signature form in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"tag": "SignatureField", "key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let tag = signatureForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);