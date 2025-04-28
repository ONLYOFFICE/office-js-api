// This example demonstrates how to set a date for a datepicker content control.
let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.SetDate(new Date(1998, 4, 10));