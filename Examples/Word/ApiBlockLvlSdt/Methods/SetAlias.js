// This example sets the alias attribute to the container.
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias '№1'.");
blockLvlSdt.SetAlias("№1");
doc.AddElement(0, blockLvlSdt);
let alias = blockLvlSdt.GetAlias();
let paragraph = doc.GetElement(1);
paragraph.AddText("Alias: " + alias);