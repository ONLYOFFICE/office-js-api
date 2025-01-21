// This example clears the form.
// 
// ## Example
// 
// This example clears the form.
let document = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = document.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
pictureForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document was cleared.");
document.Push(paragraph);