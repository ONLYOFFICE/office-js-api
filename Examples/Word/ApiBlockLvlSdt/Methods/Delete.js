// Remove a content control and all its text from a document.

// How do I delete a content control along with everything inside it in a document?

// Permanently erase a content control and its contents in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.Delete(false);