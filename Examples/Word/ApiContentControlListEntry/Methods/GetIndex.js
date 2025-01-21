// This example shows how to get the index of a content control list item in the collection of list items.
let document = Api.GetDocument();
let contentControls = document.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let listItem = contentControlList.GetItem(0);
let index = listItem.GetIndex();
document.AddElement(0, Api.CreateParagraph().AddText("Index of the first item: " + index));