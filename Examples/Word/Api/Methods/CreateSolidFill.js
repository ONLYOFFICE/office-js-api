// This example shows how to create a solid fill.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRGBColor = Api.CreateRGBColor(255, 111, 61);
var oFill = Api.CreateSolidFill(oRGBColor);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("roundRect", 5930900, 395605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "CreateSolidFill.docx");
builder.CloseFile();