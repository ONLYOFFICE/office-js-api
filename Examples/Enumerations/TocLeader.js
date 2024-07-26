// This example adds a table of contents with the dot leader to the document.
var sTocLeader = "dot";
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": sTocLeader, "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);