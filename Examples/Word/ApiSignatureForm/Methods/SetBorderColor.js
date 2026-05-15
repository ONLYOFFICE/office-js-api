// Change the outline color of a signature field's border in a document.

// How do I set a custom border color for a signature field in a document?

// Make a signature field stand out by styling its border with a specific color in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetBorderColor(Api.HexColor('#FF6F3D'));