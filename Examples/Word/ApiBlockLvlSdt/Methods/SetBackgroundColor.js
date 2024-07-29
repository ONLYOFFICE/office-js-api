// This example sets the background color to the block content control.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oBlockLvlSdt.SetBackgroundColor(255, 111, 61);
oDocument.AddElement(0, oBlockLvlSdt);