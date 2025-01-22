// This example shows how to get the index of a content control list item in the collection of list items.
let doc = Api.GetDocument();
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let listItem = contentControlList.GetItem(0);
let index = listItem.GetIndex();
doc.AddElement(0, Api.CreateParagraph().AddText("Index of the first item: " + index));