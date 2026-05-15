// Choose a dropdown list entry and apply its value as the active selection in a document.

// How do I programmatically select a specific list item in a dropdown control in a document?

// Set the current choice in a combo box or dropdown when you need a default or computed selection in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
paragraph.Push(cc);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(3);
listItem.Select();