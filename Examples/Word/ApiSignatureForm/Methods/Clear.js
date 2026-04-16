// Clear the signature form.

// How to clear the contents of a signature form.

// Clear the image from the signature form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
signatureForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The signature form has been cleared.");
doc.Push(paragraph);