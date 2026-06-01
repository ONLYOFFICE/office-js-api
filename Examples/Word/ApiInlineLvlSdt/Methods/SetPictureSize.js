// Resize the image inside a picture content control in a document.

// How do I set the exact width and height of a picture content control in a document?

// Control the display dimensions of an embedded image to fit a fixed layout in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
inlineControl.SetPictureSize(50 * 36000, 70 * 36000);