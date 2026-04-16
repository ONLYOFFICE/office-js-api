// Check if a content control is a datepicker in a document.

// How do I is date picker in a document?

// Is date picker using an inline content control object in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText(contentControl.IsDatePicker() ? "true" : "false");
doc.AddElement(1, paragraph1);