// Set the placeholder text for a signature field in a document.

// How do I add placeholder text to a signature field in a document?

// Customize what a blank signature field displays before it is filled in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetPlaceholderText("Please sign here");