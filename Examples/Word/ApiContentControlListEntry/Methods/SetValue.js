// Set a string that represents the display text of a list item for a drop-down list or combo box content control in a document.

// How to set value for a content control list entry in a document?

// Set value and display the result in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}]);
let paragraph = doc.GetElement(0);
let contentControlList = cc.GetDropdownList();
paragraph.Push(cc);
let listItem = contentControlList.GetItem(2);
listItem.SetValue("Home");
listItem.Select();
paragraph = Api.CreateParagraph();
paragraph.AddText("Value of third item in list: " + listItem.GetValue());
doc.AddElement(0, paragraph);