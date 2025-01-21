// This example gets a class type and inserts it into the document.
let document = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let classType = document.GetClassType();
paragraph = document.GetElement(0);
paragraph.AddText("Class Type = " + classType);