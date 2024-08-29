var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.GetFinalSection();
var nWidth = oSection.GetPageWidth();
oParagraph.AddText("Page width = " + nWidth);