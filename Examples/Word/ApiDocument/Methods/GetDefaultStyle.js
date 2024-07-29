// This example shows how to get the default style parameters for the specified document element.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oDocument.GetDefaultParaPr();
oParaPr.SetSpacingLine(276, "auto");
oParaPr.SetSpacingAfter(200);
var oNormalStyle = oDocument.GetDefaultStyle("paragraph");
oParaPr = oNormalStyle.GetParaPr();
oParaPr.SetSpacingLine(240, "auto");
oParaPr.SetJc("both");
oParagraph.AddText("This is just a text.");