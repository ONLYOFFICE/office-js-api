// This example shows how to set format of a date content control.
let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.SetDateFormat('dd.mm.yyyy');
contentControl.SetDate('02/01/1998');