// This example gets a class type and inserts it into the document.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
var sClassType = oBlockLvlSdt.GetClassType();
oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Class type: " + sClassType);