// Attach a reviewer comment to a content control in a document.

// How do I add a comment with an author name to a content control in a document?

// Let a named reviewer leave a comment on a content control for collaborative review in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddComment("comment", "John Smith");