// Place an image inside a signature field to represent a handwritten signature in a document.

// How do I fill a signature field with a picture of a signature in a document?

// Populate a signature field with an image from a URL to complete the signing process in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "required": true, "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");