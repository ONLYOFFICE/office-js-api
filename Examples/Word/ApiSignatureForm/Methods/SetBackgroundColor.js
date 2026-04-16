// Set the background color to the current form.

// How to color the signature form background.

// Set the rose color as a background color to the signature form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));