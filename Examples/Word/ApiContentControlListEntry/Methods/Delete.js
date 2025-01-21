// This example deletes the specified item in a combo box or drop-down list content control.
let document = Api.GetDocument();
let contentControls = document.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
contentControlList.Delete(0);
document.AddElement(0, Api.CreateParagraph().AddText("First item deleted."));