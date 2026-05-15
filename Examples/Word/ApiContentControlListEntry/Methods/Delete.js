// Delete a specific entry from a combo box dropdown list in a document.

// How do I remove a single item from a dropdown list content control in a document?

// Reduce the available choices in a list control by permanently removing one option in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Count of items inside drop-down before delete: " + contentControlList.GetElementsCount());
paragraph.AddLineBreak();
listItem.Delete();
paragraph.AddText("Count of items inside drop-down after delete: " + contentControlList.GetElementsCount());
doc.AddElement(0, paragraph);