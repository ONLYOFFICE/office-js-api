// This example shows how to get a parent content control.
let document = Api.GetDocument();
let contentControls = document.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let parentControl = contentControlList.GetParent();
document.AddElement(0, Api.CreateParagraph().AddText("Parent content control tag: " + parentControl.GetTag()));