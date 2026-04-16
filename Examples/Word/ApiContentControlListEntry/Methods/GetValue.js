// Get a string that represents the display text of a list item for a drop-down list or combo box content control in a document.

// How can I get the value using a content control list entry in a document?

// Get the value for a content control list entry in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(1);
let paragraph = Api.CreateParagraph();
let value = listItem.GetValue();
paragraph.AddText("Value of the content control list entry: " + value);
doc.AddElement(0, paragraph);