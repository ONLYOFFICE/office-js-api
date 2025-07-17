// This example respects the form border width when scaling the image.

// How to make borders respected when increasing it.

// Set respect borders property of the picture form.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
pictureForm.SetRespectBorders(true);
let respectBorders = pictureForm.IsRespectBorders();
paragraph = Api.CreateParagraph();
paragraph.AddText("The borders of the first picture form in this document are respected when scaling the image: " + respectBorders);
doc.Push(paragraph);