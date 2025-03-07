// This example adds a table of contents of the standard style to the document.

// How to create a table of contents properties indicating its style.

// Add a table of contents with standard style.

let tocStyle = "standard";
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": tocStyle};
doc.AddTableOfContents(tocPr);