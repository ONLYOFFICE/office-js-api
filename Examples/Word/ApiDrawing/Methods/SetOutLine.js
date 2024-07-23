// This example sets the outline properties to the specified graphic object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing); 
var oCopyDrawing = oDrawing.Copy();
oStroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oCopyDrawing.SetOutLine(oStroke);
oParagraph.AddDrawing(oCopyDrawing);
builder.SaveFile("docx", "SetOutLine.docx");
builder.CloseFile();