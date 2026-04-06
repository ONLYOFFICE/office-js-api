// This example sets the lock state of the signature form.

// How to lock or unlock the signature form.

// Lock the signature form to prevent editing.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "required": true, "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetLock(true);
let lock = signatureForm.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("The form is locked: " + lock);
doc.Push(paragraph);
