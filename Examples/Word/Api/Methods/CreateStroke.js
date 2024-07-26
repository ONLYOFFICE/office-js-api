// This example shows how to crate a stroke.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRGBColor = Api.CreateRGBColor(51, 51, 51);
var oFill = Api.CreateSolidFill(oRGBColor);
var oStroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
var oDrawing = Api.CreateShape("roundRect", 5930900, 395605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "CreateStroke.docx");
builder.CloseFile();