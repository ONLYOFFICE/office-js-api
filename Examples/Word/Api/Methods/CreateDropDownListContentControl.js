// Add a drop-down list field with selectable options to a document.

// How do I insert a drop-down list field into a document?

// Give readers a fixed set of choices by embedding a drop-down list control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateDropDownListContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);