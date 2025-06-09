// This example sets the index of a content control list item in the collection of list items.
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let listItem = contentControlList.GetItem(1);
let firstItem = contentControlList.GetItem(0);
let text = firstItem.GetText();
paragraph.AddText("Text of the first item: " + text);
listItem.SetIndex(0);
firstItem = contentControlList.GetItem(0);
text = firstItem.GetText();
paragraph.AddText("\nText of the first item after change index: " + text);
doc.AddElement(0, paragraph);