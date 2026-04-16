// Check if the content control is a picture in a document.

// How to is picture for an inline content control in a document?

// Is picture and display the result in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
let isPicture = inlineControl.IsPicture();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a picture? " + isPicture);
doc.Push(paragraph);