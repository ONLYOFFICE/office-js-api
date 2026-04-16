// Create a combo box content control in a document.

// How do I create the combo box content control in a document?

// Create the combo box content control and display the result in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);