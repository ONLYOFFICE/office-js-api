// This example inserts a paragraph at the specified position.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This graphic object with paragraph.");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a new paragraph.");
oDrawing.InsertParagraph(oParagraph);