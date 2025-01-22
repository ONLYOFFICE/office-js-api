// This example shows how to get items count of the list of values of combobox/listbox.
let doc = Api.GetDocument();
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let count = contentControlList.GetElementsCount();
doc.AddElement(0, Api.CreateParagraph().AddText("Number of items in the list: " + count));