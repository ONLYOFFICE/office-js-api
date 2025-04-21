// This example shows how to check if a content control is a checkbox.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddCheckBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.SetCheckBoxChecked(true);