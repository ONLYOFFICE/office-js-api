// This example shows how to add a datepicker content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.AddDatePickerContentControl();
paragraph.AddText("Datapicker content control");