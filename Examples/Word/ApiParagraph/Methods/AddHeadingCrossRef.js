// This example adds a heading cross-reference to the paragraph.
var oDocument = Api.GetDocument();
var oNewDocumentStyle = oDocument.GetStyle("Heading 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Cross-reference method");
var aHeadingParagraphs = oDocument.GetAllHeadingParagraphs();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Heading 1 style is applied to the heading ");
oDocument.Push(oParagraph);
oParagraph.AddHeadingCrossRef("text", aHeadingParagraphs[0]);