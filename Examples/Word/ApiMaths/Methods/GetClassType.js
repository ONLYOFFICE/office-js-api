// Identify the object type of the collection of equations in a document.

// Find out what kind of object the equations collection is in a document.

// Get the class type of the document's equations collection and report it.

let doc = Api.GetDocument();
let classType = doc.GetMaths().GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
