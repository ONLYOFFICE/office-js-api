// This example specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings.
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetBottomBorder("single", 24, 0, 255, 111, 61);
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oMyStyle);
oParagraph.AddText("This is the first paragraph. ");
oParagraph.AddText("The paragraph properties styled above set a border below it.");