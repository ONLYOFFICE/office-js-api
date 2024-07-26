// This example deletes the current graphic object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oDrawing.Delete();
oParagraph.AddLineBreak();
oParagraph.AddText("In this paragraph, the Drawing object has been deleted.");
builder.SaveFile("docx", "Delete.docx");
builder.CloseFile();