// This example gets a class type and inserts it into the document.

// How get a class type of ApiDocument.

// Retrieve class type of a created document object and display it.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let classType = doc.GetClassType();
paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);