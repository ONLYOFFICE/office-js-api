// This example gets a class type and inserts it into the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSchemeColor = Api.CreateSchemeColor("dk1");
var oFill = Api.CreateSolidFill(oSchemeColor);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var sClassType = oSchemeColor.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();