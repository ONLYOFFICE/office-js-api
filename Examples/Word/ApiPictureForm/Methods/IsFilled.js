// Check whether the picture form is filled.

// How to check if the picture form has an image set.

// Create two picture forms, fill the second one with an image, and check if each form is filled.

let doc = Api.GetDocument();
let pictureForm1 = Api.CreatePictureForm({"key": "Photo1", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm1);
let pictureForm2 = Api.CreatePictureForm({"key": "Photo2", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
paragraph.AddElement(pictureForm2);
pictureForm2.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let filled1 = pictureForm1.IsFilled();
let filled2 = pictureForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first picture form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second picture form is filled: " + filled2);
doc.Push(paragraph);