// Swap a paragraph for a block-level content control in a document.

// How do I replace an existing paragraph with a content control in a document?

// Substitute plain text with a structured content container to enable form-like editing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The paragraph was replaced with the current content control.");
paragraph.ReplaceByElement(blockLvlSdt);