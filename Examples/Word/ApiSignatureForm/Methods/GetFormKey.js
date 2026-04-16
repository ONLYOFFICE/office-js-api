// Get the form key in a document.

// How to get a key of a signature form.

// Retrieve key of a created signature form object and display it.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let key = signatureForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);