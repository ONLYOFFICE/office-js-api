// Set a custom date format for a datepicker content control in a document.

// How to set date format for an inline content control?

// Set date format and display the result in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.SetDateFormat('dd.mm.yyyy');
contentControl.SetDate(new Date(1998, 2, 1));