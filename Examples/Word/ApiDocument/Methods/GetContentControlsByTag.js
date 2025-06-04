// This example shows how to get a list of all content controls in the document with the specified tag name.

// Retrieve each content control with the specified tag.

// Get the first content control with the tag and set its alias.

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