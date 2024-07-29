// This example clears the contents from the content control.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.RemoveAllElements();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("All elements were removed from the content control.");