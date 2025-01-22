// This example adds a table of contents which is generated from the specified styles to the document.
let tocStyleLvl = [{Name: "Heading 1", Lvl: 2}, {Name: "Heading 2", Lvl: 3}];
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"StylesLvls": tocStyleLvl}, "TocStyle": "standard"};
document.AddTableOfContents(tocPr);