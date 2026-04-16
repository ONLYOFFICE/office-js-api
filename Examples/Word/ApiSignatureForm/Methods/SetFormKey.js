// Set a key to the current form.

// How to specify the form key of the signature form.

// Change the key to the signature form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetFormKey("Signature");
let key = signatureForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);