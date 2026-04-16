// Set a date for a datepicker content control in a document.

// How can I set date using an inline content control in a document?

// Set date for an inline content control in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDate(new Date(1998, 4, 10));