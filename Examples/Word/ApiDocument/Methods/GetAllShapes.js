// This example shows how to get a collection of shape objects from the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing1 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing1);
var oDrawing2 = Api.CreateShape("wave", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing2);
var aDrawings = oDocument.GetAllShapes();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
aDrawings[1].Fill(oFill);
builder.SaveFile("docx", "GetAllShapes.docx");
builder.CloseFile();