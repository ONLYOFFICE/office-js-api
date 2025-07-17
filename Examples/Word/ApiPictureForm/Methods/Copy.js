// This example copies the form.

// How to create a duplicate of the form.

// Copy the picture form and add it to the paragraph.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
let copyPictureForm = pictureForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyPictureForm);