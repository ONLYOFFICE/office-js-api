// This example pushes a paragraph to actually add it to the container.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a block text content control.");
oBlockLvlSdt.Push(oParagraph);
oDocument.AddElement(0, oBlockLvlSdt);