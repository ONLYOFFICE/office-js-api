// This example shows how to change size of picture content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddPictureContentControl();
contentControl.SetPictureSize(10, 10);