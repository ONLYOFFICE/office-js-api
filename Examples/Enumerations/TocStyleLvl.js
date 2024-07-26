// This example adds a table of contents which is generated from the specified styles to the document.
var aTocStyleLvl = [{Name: "Heading 1", Lvl: 2}, {Name: "Heading 2", Lvl: 3}];
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"StylesLvls": aTocStyleLvl}, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);