// This example adds a table of contents which is generated from 9 outline levels to the document.
var oTocBuildFromPr = {"OutlineLvls": 9};
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": oTocBuildFromPr, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);