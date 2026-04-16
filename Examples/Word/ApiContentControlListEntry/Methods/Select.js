// Select the list entry in a drop-down list or combo box content control and set the text of the content control to the value of the item in a document.

// How can I select using a content control list entry in a document?

// Select for a content control list entry in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
paragraph.Push(cc);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(3);
listItem.Select();