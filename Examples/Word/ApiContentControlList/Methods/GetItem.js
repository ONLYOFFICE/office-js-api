// This example shows how to get the item of values of combobox/dropdown list.
let doc = Api.GetDocument();
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let listItem = contentControlList.GetItem(0);
doc.AddElement(0, Api.CreateParagraph().AddText("First item display text: " + listItem.GetDisplayText()));