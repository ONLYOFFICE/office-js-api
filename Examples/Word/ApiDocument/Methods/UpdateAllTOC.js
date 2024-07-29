// This example updates all tables of contents in the current document.
var oDocument = Api.GetDocument();
var oNewDocumentStyle = oDocument.GetStyle("Heading 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 1");
oNewDocumentStyle = oDocument.GetStyle("Heading 2");
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 2");
oDocument.Push(oParagraph);
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);
oNewDocumentStyle = oDocument.GetStyle("Heading 2");
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 2");
oDocument.AddElement(3, oParagraph);
oDocument.UpdateAllTOC(false);