// Set the border color to the current form.

// How to set border color of the signature form.

// Set the rose color as a border color to the signature form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetBorderColor(Api.HexColor('#FF6F3D'));