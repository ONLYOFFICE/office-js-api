// This example shows how to get an array of all paragraphs from the document content.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, oFill, oStroke);
oParagraph.AddDrawing(oShape);
var oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Paragraph 1");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Paragraph 2");
oDocContent.Push(oParagraph);
var aParagraphs = oDocContent.GetAllParagraphs();
aParagraphs[0].SetBold(true);