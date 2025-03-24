// This example returns the text properties from the current form.

// How to get text properties the picture form.

// Make the text of the picture form italic.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
pictureForm.SetTextPr(textPr);
let formTextPr = pictureForm.GetTextPr();
formTextPr.SetItalic(true);
pictureForm.SetTextPr(formTextPr);