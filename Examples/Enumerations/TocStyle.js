// This example adds a table of contents of the standard style to the document.
var sTocStyle = "standard";
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": sTocStyle};
oDocument.AddTableOfContents(oTocPr);