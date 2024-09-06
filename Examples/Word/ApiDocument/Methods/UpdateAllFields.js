// This example updates all fields in the current document.
let oDocument = Api.GetDocument();
let oNewDocumentStyle = oDocument.GetStyle("Heading 1");
let oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 1");
oNewDocumentStyle = oDocument.GetStyle("Heading 2");
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 2");
oDocument.Push(oParagraph);
let oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);
oNewDocumentStyle = oDocument.GetStyle("Heading 2");
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 3");
oDocument.AddElement(3, oParagraph);
oDocument.UpdateAllFields();