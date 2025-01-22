// This example gets a class type and inserts it into the document.
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
paragraph = doc.GetElement(1);
paragraph.AddText("Class type: " + blockLvlSdt.GetClassType());