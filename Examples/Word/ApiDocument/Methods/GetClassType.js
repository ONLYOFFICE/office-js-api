// Read the class type identifier of a document object in a document.

// How do I check what class type a document object belongs to in a document?

// Confirm the object kind before processing it by reading its class type in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let classType = doc.GetClassType();
paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);