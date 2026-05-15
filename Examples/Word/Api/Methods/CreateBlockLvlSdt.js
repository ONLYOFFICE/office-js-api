// Insert a block text content control with text into a document.

// How do I add a structured text container to a document?

// Place a labeled block of editable content at the beginning of a document.

let doc = Api.GetDocument();
var blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);