// Retrieve the class type of a cell range in a document.

// How to identify the class type of a cell range?

// Obtain the class type identifier of a cell range object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange(0, 9);
let classType = range.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);