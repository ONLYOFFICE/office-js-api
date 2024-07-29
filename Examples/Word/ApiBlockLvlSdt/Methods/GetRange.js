// This example shows how to get a Range object that represents the part of the document contained in the specified content control.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
var oRange = oBlockLvlSdt.GetRange(10, 14);
oRange.SetBold(true);