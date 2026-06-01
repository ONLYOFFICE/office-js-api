// Add a date picker field to a document.

// How do I insert a date picker field into a document?

// Let readers pick a date from a calendar by inserting a date picker control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateDatePickerContentControl({format: 'yyyy.mm.dd'});
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);