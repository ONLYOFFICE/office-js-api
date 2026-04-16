// Set a string that represents the display text of a list item for a drop-down list or combo box content control in a document.

// How can I set text using a content control list entry in a document?

// Set text for a content control list entry in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
let contentControlList = cc.GetDropdownList();
paragraph.Push(cc);
let listItem = contentControlList.GetItem(1);
listItem.SetText("Saturn");
listItem.Select();