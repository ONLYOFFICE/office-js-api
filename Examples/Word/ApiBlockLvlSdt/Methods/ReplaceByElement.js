// This example replaces the content control with a paragraph.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.SetPlaceholderText("Name");
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The content control was replaced with the current paragraph.");
oBlockLvlSdt.ReplaceByElement(oParagraph);