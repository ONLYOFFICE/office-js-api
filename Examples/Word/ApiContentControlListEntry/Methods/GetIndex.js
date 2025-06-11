// This example shows how to get the index of a content control list item in the collection of list items.
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let paragraph = Api.CreateParagraph();
let contentControlItem = contentControlList.GetItem(1);
let index = contentControlItem.GetIndex();
paragraph.AddText("Index of the content control list entry:" + index);
doc.AddElement(0, paragraph);