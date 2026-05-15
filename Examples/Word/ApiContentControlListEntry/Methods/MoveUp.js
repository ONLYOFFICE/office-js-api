// Shift a dropdown or combo box list entry one position higher in a document.

// How do I move a list item up in a dropdown control in a document?

// Reorder entries by promoting an item toward the top of the list when adjusting option priority in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(3);
listItem.MoveUp();
let paragraph = doc.GetElement(0);
paragraph.Push(cc);