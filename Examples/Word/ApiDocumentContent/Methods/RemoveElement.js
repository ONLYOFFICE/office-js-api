// This example removes an element using the position specified.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 1926590, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oDocContent = oDrawing.GetDocContent();
oDocContent.RemoveAllElements();
oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is paragraph #1.");
for (let nParaIncrease = 1; nParaIncrease < 5; ++nParaIncrease) {
	oParagraph = Api.CreateParagraph();
	oParagraph.AddText("This is paragraph #" + (nParaIncrease + 1) + ".");
	oDocContent.Push(oParagraph);
}
oDocContent.RemoveElement(2);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("We removed paragraph #3, check that out above.");
oDocContent.Push(oParagraph);
builder.SaveFile("docx", "RemoveElement.docx");
builder.CloseFile();