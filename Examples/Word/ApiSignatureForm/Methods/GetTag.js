// Get the form tag in a document.

// How to get the tag of a signature form.

// Retrieve the tag of a created signature form and display it.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"tag": "SignatureField", "key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let tag = signatureForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);