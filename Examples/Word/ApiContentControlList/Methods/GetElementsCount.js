// This example shows how to get items count of the list of values of combobox/listbox.
let document = Api.GetDocument();
let contentControls = document.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let count = contentControlList.GetElementsCount();
document.AddElement(0, Api.CreateParagraph().AddText("Number of items in the list: " + count));