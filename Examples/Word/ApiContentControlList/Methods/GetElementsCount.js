// Count the number of entries in a dropdown list content control in a document.

// How do I find out how many items are in a combo box list in a document?

// Check the total number of selectable options available in a list control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let count = contentControlList.GetElementsCount();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Number of items in the list: " + count);
doc.AddElement(0, paragraph);