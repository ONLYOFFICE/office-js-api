// This example adds a table of contents with the specified properties to the document.

// How to create a table of contents properties.

// Add a table of contents from the properties.

let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
doc.AddTableOfContents(tocPr);