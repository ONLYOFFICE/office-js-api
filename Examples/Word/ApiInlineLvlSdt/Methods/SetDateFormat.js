// Apply a custom date format to a date picker content control in a document.

// How do I control how a date is displayed in a date picker content control in a document?

// Enforce a consistent date style across forms by setting a format pattern in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.SetDateFormat('dd.mm.yyyy');
contentControl.SetDate(new Date(1998, 2, 1));