// This example shows how to get items count of the list of values of combobox/listbox.

// How to get the number of elements of the content control list.

// Display the number of items from content control.

let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let count = contentControlList.GetElementsCount();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Number of items in the list: " + count);
doc.AddElement(0, paragraph);