// This example flips the drawing horizontally.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oDrawing.SetHorFlip(true);
builder.SaveFile("docx", "SetHorFlip.docx");
builder.CloseFile();