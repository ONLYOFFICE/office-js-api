// This example sets the text paddings to the current shape.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oDocContent = oDrawing.GetDocContent();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a sample text with paddings set to it.");
oDocContent.Push(oParagraph);
oDrawing.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);
builder.SaveFile("docx", "SetPaddings.docx");
builder.CloseFile();