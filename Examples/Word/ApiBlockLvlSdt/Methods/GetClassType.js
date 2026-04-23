// Read the object type of a content control and display it in a document.

// How do I find out what type of object a content control is in a document?

// Identify a content control by its type label and write the result as text in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
paragraph = doc.GetElement(1);
paragraph.AddText("Class type: " + blockLvlSdt.GetClassType());