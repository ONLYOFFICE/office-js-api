// Retrieve the date from a datepicker content control in a document.

// How can I get the date using an inline content control in a document?

// Get the date for an inline content control in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDateFormat("yyyy-mm-dd");
contentControl.SetDate(new Date(1961, 9, 3));
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let date = contentControl.GetDate();
paragraph.AddText(date.toDateString());