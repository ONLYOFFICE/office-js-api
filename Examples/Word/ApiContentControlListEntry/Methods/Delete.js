// This example deletes the specified item in a combo box or drop-down list content control.
let doc = Api.GetDocument();
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
contentControlList.Delete(0);
doc.AddElement(0, Api.CreateParagraph().AddText("First item deleted."));