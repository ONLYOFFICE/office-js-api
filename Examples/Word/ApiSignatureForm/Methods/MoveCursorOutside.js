// This example moves the cursor outside of the signature form.

// How to move the cursor to the position after the form.

// Move the cursor to after the signature form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.MoveCursorOutside();
