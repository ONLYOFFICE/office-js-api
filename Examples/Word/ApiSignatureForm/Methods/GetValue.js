// Get the image from a signature form as a base64 encoded string.

// The GetValue method of ApiSignatureForm returns the signature image data stored in the form.

// Create a signature form, add it to the document, and read its current value.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "required": true, "placeholder": "Signature"});
signatureForm.Value = "https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png";
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let value = signatureForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Signature form value: " + value);
doc.Push(paragraph);
