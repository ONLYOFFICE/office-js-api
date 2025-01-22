// This example shows how to get a parent content control.
let doc = Api.GetDocument();
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let parentControl = contentControlList.GetParent();
doc.AddElement(0, Api.CreateParagraph().AddText("Parent content control tag: " + parentControl.GetTag()));