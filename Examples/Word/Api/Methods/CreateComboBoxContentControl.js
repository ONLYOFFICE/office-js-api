// Insert a drop-down combo box with selectable options into a document.

// How do I add a combo box with a list of choices to a document?

// Embed an interactive combo box that lets readers pick from predefined values in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);