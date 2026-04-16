// Check the class type returned by a paragraph in a document.

// How do I check what type a paragraph object is in a document?

// Retrieve and output the class type string for a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let classType = paragraph.GetClassType();
paragraph.AddText("Class Type = " + classType);