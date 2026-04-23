// Determine whether a signature field already contains a submitted signature in a document.

// How do I tell if a signer has already completed a signature field in a document?

// Verify which signature fields have been filled and which remain empty in a document.

let doc = Api.GetDocument();
let signatureForm1 = Api.CreateSignatureForm({"key": "Signature1", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm1);
let signatureForm2 = Api.CreateSignatureForm({"key": "Signature2", "tip": "Please sign here", "placeholder": "Signature"});
paragraph.AddElement(signatureForm2);
signatureForm2.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
let filled1 = signatureForm1.IsFilled();
let filled2 = signatureForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first signature form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second signature form is filled: " + filled2);
doc.Push(paragraph);