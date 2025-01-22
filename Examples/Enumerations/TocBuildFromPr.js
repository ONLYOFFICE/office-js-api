// This example adds a table of contents which is generated from 9 outline levels to the document.
let tocBuildFromPr = {"OutlineLvls": 9};
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": tocBuildFromPr, "TocStyle": "standard"};
document.AddTableOfContents(tocPr);