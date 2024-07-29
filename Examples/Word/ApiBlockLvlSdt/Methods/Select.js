// This example selects the content control.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("The block text content control is selected.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.Select();