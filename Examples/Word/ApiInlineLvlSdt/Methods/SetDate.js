// This example demonstrates how to set a date for a datepicker content control.
let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDate(new Date(1998, 4, 10));