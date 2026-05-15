// Get the image from a picture form as a base64 encoded string.

// The GetValue method of ApiPictureForm returns the image data currently stored in the form.

// Create a picture form, add it to the document, and read its current value.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Photo", "tip": "Upload your photo", "required": true, "placeholder": "Photo"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
let value = pictureForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Picture form value type: " + typeof value);
doc.Push(paragraph);
