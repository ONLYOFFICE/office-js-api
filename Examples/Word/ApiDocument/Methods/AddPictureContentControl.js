// This example shows how to add a picture content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.AddPictureContentControl();
paragraph.AddText("Picture content control");