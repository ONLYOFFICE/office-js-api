// This example clears the list of values of combobox/listbox.

// How to delete content control elements.

// Find the first content control, get its dropdown list and remove all its items.

let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
contentControlList.Clear();
doc.AddElement(0, Api.CreateParagraph().AddText("All items cleared from the list."));