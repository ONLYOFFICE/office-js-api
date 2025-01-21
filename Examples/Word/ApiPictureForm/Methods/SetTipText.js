// This example sets the tip text to the current form.
let document = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
let paragraph = document.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetTipText("Upload your photo");
let tipText = pictureForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
document.Push(paragraph);