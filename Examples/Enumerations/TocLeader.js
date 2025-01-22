// This example adds a table of contents with the dot leader to the document.
let tocLeader = "dot";
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": tocLeader, "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
document.AddTableOfContents(tocPr);