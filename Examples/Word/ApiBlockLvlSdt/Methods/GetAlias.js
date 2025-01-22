// This example shows how to get the alias attribute for the container.
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias 'OnlyOffice'.");
blockLvlSdt.SetAlias("OnlyOffice");
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Alias: " + blockLvlSdt.GetAlias());