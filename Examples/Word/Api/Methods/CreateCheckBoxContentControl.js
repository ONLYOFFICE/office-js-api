// Insert a checked checkbox into a document.

// How do I add a checkbox that is already checked to a document?

// Place a pre-checked checkbox control on a new line in a document.

let doc = Api.GetDocument();
let cc = Api.CreateCheckBoxContentControl({checked: true});
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);