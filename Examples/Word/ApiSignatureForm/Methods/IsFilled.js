// This example checks whether the signature form is filled.

// How to check if the signature form has an image set.

// Create two signature forms, fill the second one with an image, and check if each form is filled.

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
