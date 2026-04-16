// Retrieve the drop-down list from a content control in a document.

// How do I get the dropdown list in a document?

// Get the dropdown list using an inline content control object in a document.

let doc = Api.GetDocument();
let cc = Api.CreateDropDownListContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
let contentControlList = cc.GetDropdownList();
paragraph.AddText("Class Type = " + contentControlList.GetClassType());
doc.Push(paragraph);