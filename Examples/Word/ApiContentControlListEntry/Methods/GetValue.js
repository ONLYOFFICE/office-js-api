// This example shows how to get a string that represents the display text of a list item for a drop-down list or combo box content control.
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let listItem = contentControlList.GetItem(1);
let paragraph = Api.CreateParagraph();
let value = listItem.GetValue();
paragraph.AddText("Value of the content control list entry: " + value);
doc.AddElement(0, paragraph);