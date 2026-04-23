// Add a new entry to a combo box dropdown list in a document.

// How do I insert an item at a specific position in a dropdown list in a document?

// Expand the available choices in a combo box by inserting a new option at a chosen index in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
contentControlList.Add("Venus", "planet2", 1);
let paragraph = doc.GetElement(0);
paragraph.Push(cc);