// Determine whether an inline content control is a picture control in a document.

// How do I verify that a content control is intended to hold a picture in a document?

// Identify picture controls to apply image-specific handling separately from text controls in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
let isPicture = inlineControl.IsPicture();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a picture? " + isPicture);
doc.Push(paragraph);