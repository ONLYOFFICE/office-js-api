// This example sets the placeholder text to the current form.

// How to add a text as a placeholder to the form.

// Set a placeholder text to the signature form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetPlaceholderText("Please sign here");
