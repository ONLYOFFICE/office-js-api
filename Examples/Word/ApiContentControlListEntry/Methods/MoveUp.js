// This example moves the current item in the parent drop-down list or combo box content control up one element.
let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let listItem = contentControlList.GetItem(1);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Pos of first content control list item before move: " + listItem.GetIndex());
listItem.MoveUp()
paragraph.AddText("\nPos of first content control list item after move: " + listItem.GetIndex());
doc.AddElement(0, paragraph);