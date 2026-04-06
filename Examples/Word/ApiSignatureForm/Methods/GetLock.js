// This example shows how to get the lock state of the signature form.

// How to check if the signature form is locked.

// Get the lock state of the form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetLock(true);
let lock = signatureForm.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("The form is locked: " + lock);
doc.Push(paragraph);
