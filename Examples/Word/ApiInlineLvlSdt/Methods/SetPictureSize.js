// Set the size of an image in a content control in a document.

// How can I set picture size using an inline content control in a document?

// Set picture size for an inline content control in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
inlineControl.SetPictureSize(50 * 36000, 70 * 36000);