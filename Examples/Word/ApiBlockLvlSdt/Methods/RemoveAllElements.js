// Clear the contents of the content control in a document.

// Create a block content control, add a text to it, and clear its contents in a document.

// Remove all elements from the block level content control in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.RemoveAllElements();
let paragraph = doc.GetElement(1);
paragraph.AddText("All elements were removed from the content control.");