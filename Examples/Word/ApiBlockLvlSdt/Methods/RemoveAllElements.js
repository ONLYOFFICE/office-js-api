// This example clears the contents from the content control.
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.RemoveAllElements();
let paragraph = doc.GetElement(1);
paragraph.AddText("All elements were removed from the content control.");