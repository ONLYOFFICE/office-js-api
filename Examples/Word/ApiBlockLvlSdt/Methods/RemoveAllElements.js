// This example clears the contents from the content control.
let document = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
document.AddElement(0, blockLvlSdt);
blockLvlSdt.RemoveAllElements();
let paragraph = document.GetElement(1);
paragraph.AddText("All elements were removed from the content control.");