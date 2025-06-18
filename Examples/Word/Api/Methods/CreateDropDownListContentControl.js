// This example shows how to create a combo box content control.
let doc = Api.GetDocument();
let cc = Api.CreateDropDownListContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);