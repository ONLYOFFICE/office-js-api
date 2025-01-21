// This example shows how to get a list of all content controls in the document with the specified tag name.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("Inline content control");
inlineLvlSdt.SetTag("Tag 1");
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("Block text content control");
blockLvlSdt.SetTag("Tag 2");
document.AddElement(0, blockLvlSdt);
let contentControls = document.GetContentControlsByTag("Tag 1");
contentControls[0].SetAlias("№1");