// Update the display label of a dropdown or combo box list entry in a document.

// How do I change the visible text of a list item in a document?

// Rename an option in a list when the label needs to reflect updated content or terminology in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
let contentControlList = cc.GetDropdownList();
paragraph.Push(cc);
let listItem = contentControlList.GetItem(1);
listItem.SetText("Saturn");
listItem.Select();