// Remove all content from a signature field in a document.

// How do I erase everything entered into a signature field in a document?

// Reset a signature field to its empty state in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
signatureForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The signature form has been cleared.");
doc.Push(paragraph);