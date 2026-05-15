// Retrieve the dropdown list object from an inline content control in a document.

// How do I access the dropdown list attached to a content control in a document?

// Inspect the type of a dropdown list tied to an inline content control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateDropDownListContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
let contentControlList = cc.GetDropdownList();
paragraph.AddText("Class Type = " + contentControlList.GetClassType());
doc.Push(paragraph);