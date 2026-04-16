// Find out the class type of a document object.

// How can I get the class type of a document?

// Get the class type of a document and display it in the document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let classType = doc.GetClassType();
paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);