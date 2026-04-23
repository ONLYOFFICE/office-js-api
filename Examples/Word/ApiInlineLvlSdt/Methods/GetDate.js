// Read the selected date from a date picker content control in a document.

// How do I get the date value stored in a date picker content control in a document?

// Display the formatted date from a date picker to confirm the value set on it in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDateFormat("yyyy-mm-dd");
contentControl.SetDate(new Date(1961, 9, 3));
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let date = contentControl.GetDate();
paragraph.AddText(date.toDateString());