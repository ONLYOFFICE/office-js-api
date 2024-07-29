// This example replaces a drawing with a new drawing.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oOldDrawing = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oOldDrawing.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oOldDrawing.SetSeriesFill(oFill, 1, false);
oParagraph.AddDrawing(oOldDrawing);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oNewDrawing = Api.CreateShape("rect", 5930900, 395605, oFill, oStroke);
var oDocContent = oNewDrawing.GetContent();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The chart was replaced with the current shape in this document.");
oDocContent.AddElement(0, oParagraph);
oDocument.ReplaceDrawing(oOldDrawing, oNewDrawing, false);