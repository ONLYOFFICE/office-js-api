// Assign a specific date to a date picker content control in a document.

// How do I set the selected date on a date picker content control in a document?

// Pre-fill a date picker with a fixed date so users see a ready-made value in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDate(new Date(1998, 4, 10));