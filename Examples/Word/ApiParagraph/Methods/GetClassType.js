// This example gets a class type and inserts it into the document.

// How to get the class type of the ApiParagraph.

// Get the class type of the paragraph object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let classType = paragraph.GetClassType();
paragraph.AddText("Class Type = " + classType);