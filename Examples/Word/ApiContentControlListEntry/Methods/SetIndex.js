// This example sets the index of a content control list item in the collection of list items.
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
let contentControlList = cc.GetDropdownList();
paragraph.Push(cc);
paragraph = Api.CreateParagraph();
let firstItem = contentControlList.GetItem(0);
let secondItem = contentControlList.GetItem(1);
let text = firstItem.GetText();
paragraph.AddText("Text of the first item: " + text);
secondItem.SetIndex(0);
firstItem = contentControlList.GetItem(0);
text = firstItem.GetText();
paragraph.AddText("\nText of the first item after change index: " + text);
doc.AddElement(0, paragraph);