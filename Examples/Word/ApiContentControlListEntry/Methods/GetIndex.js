// Retrieve the position of a dropdown list entry within its list in a document.

// How do I find the index of a specific item in a dropdown list in a document?

// Check where a list entry sits when you need to track or compare item order in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let paragraph = Api.CreateParagraph();
let contentControlItem = contentControlList.GetItem(1);
let index = contentControlItem.GetIndex();
paragraph.AddText("Index of the content control list entry:" + index);
doc.AddElement(0, paragraph);