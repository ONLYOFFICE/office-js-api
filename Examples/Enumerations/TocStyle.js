// This example adds a table of contents of the standard style to the document.
let tocStyle = "standard";
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": tocStyle};
doc.AddTableOfContents(tocPr);