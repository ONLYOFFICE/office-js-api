// This example shows how to get the label attribute for the container.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
oBlockLvlSdt.SetLabel("2147483647");
oDocument.AddElement(0, oBlockLvlSdt);
var oLabel = oBlockLvlSdt.GetLabel();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Label: " + oLabel);