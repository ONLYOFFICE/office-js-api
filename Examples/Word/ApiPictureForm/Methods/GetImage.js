// This example shows how to get an image in the base64 format from the picture form.
let document = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = document.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
let base64img = pictureForm.GetImage();
let drawing = Api.CreateImage(base64img, 60 * 36000, 35 * 36000);
paragraph.AddDrawing(drawing);