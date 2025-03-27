// This example gets a class type and inserts it into the document.
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let classType = doc.GetClassType();
paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);