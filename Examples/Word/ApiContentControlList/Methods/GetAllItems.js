// This example shows how to get a collection of the ApiContentControlListEntry of a list.

// How to get all items of the content control.

// Find the first content control, get its dropdown list and display each element.

let doc = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let allItems = contentControlList.GetAllItems();
let paragraph = Api.CreateParagraph();
for (let i = 0; i < allItems.length; i++) {
    paragraph.AddText("Item " + (i + 1) + ": " + allItems[i].GetValue() + "\n");
}
doc.Push(paragraph);