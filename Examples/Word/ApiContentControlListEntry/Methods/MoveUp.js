// This example moves the current item in the parent drop-down list or combo box content control up one element.
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(3);
listItem.MoveUp();
let paragraph = doc.GetElement(0);
paragraph.Push(cc);