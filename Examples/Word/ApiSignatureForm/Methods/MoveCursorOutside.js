// Place the text cursor immediately after a signature field in a document.

// How do I move focus past a signature field so I can continue typing in a document?

// Step the cursor out of a signature field to resume editing surrounding content in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.MoveCursorOutside();