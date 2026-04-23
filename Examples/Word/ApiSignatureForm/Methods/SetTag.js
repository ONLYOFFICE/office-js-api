// Attach a custom tag to a signature field in a document.

// How do I label a signature field with an identifier for later reference in a document?

// Give a signature field a searchable tag so it can be found and read back in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
signatureForm.SetTag("SignatureField");
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let tag = signatureForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);