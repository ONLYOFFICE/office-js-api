// Create a datepicker content control in a document.

// How to create the date picker content control in a document?

// Create the date picker content control using the document API.

let doc = Api.GetDocument();
let cc = Api.CreateDatePickerContentControl({format: 'yyyy.mm.dd'});
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);