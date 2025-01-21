// This example shows how to get the tag attribute for the container.
let document = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a tag set to it.");
blockLvlSdt.SetTag("This is a tag.");
document.AddElement(0, blockLvlSdt);
let tag = blockLvlSdt.GetTag();
let paragraph = document.GetElement(1);
paragraph.AddText("Tag: " + tag);