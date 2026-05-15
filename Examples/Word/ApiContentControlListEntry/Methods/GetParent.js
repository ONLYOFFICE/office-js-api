// Access the parent dropdown or combo box control that owns a list entry in a document.

// How do I get the parent control of a list entry in a document?

// Trace ownership from a list item back to its containing control when you need to work with the control directly in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let item = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
let contentControl = item.GetParent();
paragraph.AddText("Class of item list item parent: " + contentControlList.GetClassType());
doc.AddElement(0, paragraph);