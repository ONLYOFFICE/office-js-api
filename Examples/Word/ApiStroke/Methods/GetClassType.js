// This example gets a class type and inserts it into the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRGBColor = Api.CreateRGBColor(255, 111, 61);
var oFill = Api.CreateSolidFill(oRGBColor);
var oStroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
var oDrawing = Api.CreateShape("roundRect", 5930900, 395605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var sClassType = oStroke.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();