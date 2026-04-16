// Find out the class type of a paragraph object in a document.

// How can I get the class type of a paragraph in a document?

// Get the class type of a paragraph and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let classType = paragraph.GetClassType();
paragraph.AddText("Class Type = " + classType);