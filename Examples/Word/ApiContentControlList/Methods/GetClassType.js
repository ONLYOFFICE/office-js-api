// This example gets a class type and inserts it into the document.
let document = Api.GetDocument();
let contentControls = document.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let classType = contentControlList.GetClassType();
document.AddElement(0, Api.CreateParagraph().AddText("Class type of the content control list: " + classType));