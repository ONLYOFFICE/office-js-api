// Set the image of a signature form using a URL or base64 encoded string.

// The SetValue method of ApiSignatureForm is a shorthand for SetImage that fits the unified value interface.

// Create a signature form and assign a signature image from a URL using SetValue.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "required": true, "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetValue("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
