// Retrieve all entries from a dropdown list content control in a document.

// How do I get every item stored in a combo box dropdown list in a document?

// Collect the full set of selectable options from a list control to display or process them in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
paragraph.Push(cc);
let contentControlList = cc.GetDropdownList();
let listItems = contentControlList.GetAllItems();
paragraph = Api.CreateParagraph();
for (let i = 0; i < listItems.length; i++) {
    paragraph.AddText("Item " + (i + 1) + ": " + listItems[i].GetValue() + " - " + listItems[i].GetText() + "\n");
}
doc.Push(paragraph);