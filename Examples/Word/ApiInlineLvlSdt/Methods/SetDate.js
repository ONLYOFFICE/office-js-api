// This example shows how to add a date content control.
let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.SetDate('10.05.1999');