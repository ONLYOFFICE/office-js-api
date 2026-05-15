// Prevent the proportions of a picture form from changing when it is resized in a document.

// How do I ensure a picture form keeps its original proportions when resized in a document?

// Protect an image from distortion by locking the width-to-height ratio of its form in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetLockAspectRatio(true);
let lock = pictureForm.IsLockAspectRatio();
paragraph = Api.CreateParagraph();
paragraph.AddText("The aspect ratio of the picture form in this document is locked: " + lock);
doc.Push(paragraph);