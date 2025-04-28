// This example shows how to check if the content control is a picture.
let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
let isPicture = inlineControl.IsPicture();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a picture? " + isPicture);
doc.Push(paragraph);