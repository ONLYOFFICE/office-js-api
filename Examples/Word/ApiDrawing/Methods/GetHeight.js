// This example shows how to get the height of the drawing.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 100 * 36000, 10 * 36000, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var nHeight = oDrawing.GetHeight();
var oDocContent = oDrawing.GetContent();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Drawing height: " + nHeight / 36000 + " mm");
oDocContent.AddElement(0, oParagraph);