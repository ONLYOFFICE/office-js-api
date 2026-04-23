// Place an image into a picture form in a document.

// How do I insert a specific image into a picture form in a document?

// Populate a picture form with an image from a web address in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);