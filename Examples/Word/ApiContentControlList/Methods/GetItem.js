// This example shows how to get the item of values of combobox/dropdown list.
let document = Api.GetDocument();
let contentControls = document.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let listItem = contentControlList.GetItem(0);
document.AddElement(0, Api.CreateParagraph().AddText("First item display text: " + listItem.GetDisplayText()));