// This example sets a string that represents the display text of a list item for a drop-down list or combo box content control.
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let listItem = contentControlList.GetItem(1);
listItem.SetValue("Item3_V");
listItem.Select();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Value of third item in list: " + listItem.GetValue());
doc.AddElement(0, paragraph);