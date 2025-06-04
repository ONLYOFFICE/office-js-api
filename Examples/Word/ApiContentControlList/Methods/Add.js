// This example shows how to add items to the content control list.

// How to fill content control with elements.

// Find the first content control, get its dropdown list and fill it with items.

let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
contentControlList.Add("Item3_D", "Item3_V", 2);
doc.AddElement(0, contentControlList);