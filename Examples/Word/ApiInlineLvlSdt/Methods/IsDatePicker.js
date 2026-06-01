// Determine whether an inline content control is a date picker in a document.

// How do I verify that a content control is a date picker in a document?

// Identify date picker controls to handle date input fields separately from other control types in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText(contentControl.IsDatePicker() ? "true" : "false");
doc.AddElement(1, paragraph1);