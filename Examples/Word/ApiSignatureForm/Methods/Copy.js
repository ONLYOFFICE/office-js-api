// This example copies the signature form.

// How to create a duplicate of the signature form.

// Copy the signature form and add it to the paragraph.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let copySignatureForm = signatureForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copySignatureForm);
