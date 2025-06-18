// This example shows how to create a scheme color with the 'dk1' identifier.

// How to create a new scheme color.

// Add a scheme color to create a solid fill.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oSchemeColor = Api.CreateSchemeColor("dk1");
var oFill = Api.CreateSolidFill(oSchemeColor);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("curvedUpArrow", 300 * 36000, 130 * 36000, oFill, oStroke);
oSlide.AddObject(oDrawing);
oDrawing.SetPosition(608400, 1267200);