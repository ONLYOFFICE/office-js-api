// This example specifies if the form should be required.
let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetRequired(true);
let required = pictureForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);