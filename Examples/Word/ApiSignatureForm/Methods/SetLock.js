// Restrict or allow editing of a signature field in a document.

// How do I prevent users from modifying a signature field in a document?

// Protect a completed signature field from being changed or deleted in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "required": true, "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetLock(true);
let lock = signatureForm.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("The form is locked: " + lock);
doc.Push(paragraph);