// This example moves an item in a drop-down list or combo box content control down one item, so that it is after the item that originally followed it.
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let listItem = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Pos of first content control list item before move: " + listItem.GetIndex());
listItem.MoveDown()
paragraph.AddText("\nPos of first content control list item after move: " + listItem.GetIndex());
doc.AddElement(0, paragraph);