// Move the cursor to the start of a signature form in a document.

// The cursor is placed inside the signature form. Use the MoveCursorOutside method to place it before or after the form.

// Place the cursor at the start of the empty signature form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.MoveCursorToStart();
