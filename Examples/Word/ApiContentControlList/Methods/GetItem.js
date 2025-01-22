// This example shows how to get the item of values of combobox/dropdown list.
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let listItem = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
paragraph.AddText("First item value: " + listItem.GetValue());
doc.AddElement(0, paragraph);
