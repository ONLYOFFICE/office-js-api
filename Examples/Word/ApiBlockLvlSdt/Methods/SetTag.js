// Attach a tag to a content control for identification in a document.

// How do I add a custom tag string to a content control in a document?

// Mark a content control with a tag so it can be identified or processed later in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a tag set to it.");
blockLvlSdt.SetTag("This is a tag.");
doc.AddElement(0, blockLvlSdt);