// This example shows how to get a collection of drawing objects in the content control.
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing1 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing2 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing1);
oParagraph.AddDrawing(oDrawing2);
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
var arrAllDrawingObjects = oBlockLvlSdt.GetAllDrawingObjects();
arrAllDrawingObjects[0].Delete();