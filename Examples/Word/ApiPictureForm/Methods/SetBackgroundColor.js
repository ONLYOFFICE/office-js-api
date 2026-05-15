// Apply a background color to a picture form in a document.

// How do I change the background color of a picture form in a document?

// Give a picture form a colored background to make it stand out in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));