// This example shows how to get the next inline drawing object if exists.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oCopyDrawing = oDrawing.Copy();
oParagraph.AddDrawing(oCopyDrawing);
var oNextDrawing = oDrawing.GetNextDrawing();
oNextDrawing.SetHorFlip(true);