// This example sets the text color to the current text run.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFill(oFill);
oParagraph.AddText("This is a text run with the font color set to orange.");
oParagraph.SetTextPr(oTextPr);