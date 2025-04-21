// This example shows how to check if a content control is a picture.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddPictureContentControl();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText(contentControl.IsPicture() ? "true" : "false");
doc.AddElement(1, paragraph1);