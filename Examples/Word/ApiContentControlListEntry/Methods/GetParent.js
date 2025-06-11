// This example shows how to get the parent of a content control list item in the collection of list items.
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let item = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
let contentControl = item.GetParent();
contentControl.Add("Item3_D", "Item3_V", 2);
paragraph.AddText("Class of item list item parent: " + contentControlList.GetClassType());
doc.AddElement(0, paragraph);