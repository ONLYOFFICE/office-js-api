// This example pushes a paragraph to actually add it to the container.
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.Push(paragraph);
doc.AddElement(0, blockLvlSdt);