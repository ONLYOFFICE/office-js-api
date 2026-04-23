// Duplicate a signature field and place the copy in a document.

// How do I create an identical copy of a signature field in a document?

// Reuse an existing signature field by making a duplicate of it in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let copySignatureForm = signatureForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copySignatureForm);