// This example sets the default hyperlink style.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Api Document Builder");
oParagraph.SetColor(255, 111, 61);
var oCopyParagraph = oParagraph.Copy();
oDocument.Push(oCopyParagraph);
var oHyperlink = oParagraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
var oCopyHyperlink = oCopyParagraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
oCopyHyperlink.SetDefaultStyle();