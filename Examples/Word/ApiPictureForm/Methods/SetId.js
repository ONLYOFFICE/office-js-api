// Assign a unique ID to a picture form in a document.

// Set a custom ID for a picture form to tell it apart from other forms in a document.

// Give a picture form an ID that is saved to the file, unlike the internal ID which can change after reopening.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetId(1001);
let formId = pictureForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);