// This example shows how to get all heading paragraphs from the document.
var oDocument = Api.GetDocument();
var oNewDocumentStyle = oDocument.GetStyle("Heading 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 1");
var aHeadingParagraphs = oDocument.GetAllHeadingParagraphs();
aHeadingParagraphs[0].SetCaps(true);