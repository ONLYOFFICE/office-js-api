// This example shows how to get a number of elements in the current document content.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oDocContent = oDrawing.GetDocContent();
oDocContent.RemoveAllElements();
oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Number of elements inside the shape: " + oDocContent.GetElementsCount());
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetElementsCount.docx");
builder.CloseFile();