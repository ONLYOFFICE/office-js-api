// Find all content controls that share a given tag in a document.

// How do I select content controls by their tag name in a document?

// Target a specific group of controls using a shared tag to update their properties in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("Inline content control");
inlineLvlSdt.SetTag("Tag 1");
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("Block text content control");
blockLvlSdt.SetTag("Tag 2");
doc.AddElement(0, blockLvlSdt);
let contentControls = doc.GetContentControlsByTag("Tag 1");
contentControls[0].SetAlias("№1");