// This example adds a table of contents with the specified properties to the document.
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);