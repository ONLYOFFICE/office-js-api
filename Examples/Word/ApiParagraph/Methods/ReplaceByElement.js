// This example replaces the paragraph with a block level content control.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("The paragraph was replaced with the current content control.");
oParagraph.ReplaceByElement(oBlockLvlSdt);