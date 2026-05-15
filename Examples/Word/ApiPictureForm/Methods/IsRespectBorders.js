// Check whether a picture form keeps the image within its border boundaries in a document.

// How do I find out if a picture form prevents the image from overlapping its borders in a document?

// Verify that the image inside a picture form stays within its frame when scaled in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetRespectBorders(true);
let respectBorders = pictureForm.IsRespectBorders();
paragraph = Api.CreateParagraph();
paragraph.AddText("The borders of the picture form in this document are respected when scaling the image: " + respectBorders);
doc.Push(paragraph);