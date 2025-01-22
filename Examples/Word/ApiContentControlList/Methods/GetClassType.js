// This example gets a class type and inserts it into the document.
let doc = Api.GetDocument();
let contentControls = doc.GetAllContentControls();
let contentControlList = contentControls[0].GetDropdownList();
let classType = contentControlList.GetClassType();
doc.AddElement(0, Api.CreateParagraph().AddText("Class type of the content control list: " + classType));