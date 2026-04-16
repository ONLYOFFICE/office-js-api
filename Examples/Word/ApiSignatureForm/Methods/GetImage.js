// Get an image in the base64 format from the signature form in a document.

// How to get an image from the signature form.

// Get the image of the signature form and display it in the document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
let base64img = signatureForm.GetImage();
let drawing = Api.CreateImage(base64img, 60 * 36000, 35 * 36000);
paragraph.AddDrawing(drawing);