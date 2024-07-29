// This example shows how to get the next inline shape.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape1 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oShape1);
var oShape2 = Api.CreateShape("wave", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oShape2);
var oNextShape = oShape1.GetNextShape();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oNextShape.Fill(oFill);