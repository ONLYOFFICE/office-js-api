// Assign an identifier to a picture form so it can be referenced by name in a document.

// How do I label a picture form with a unique key in a document?

// Tag a picture form with a meaningful name to make it easier to locate and manage in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetFormKey("Personal information");
let key = pictureForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);