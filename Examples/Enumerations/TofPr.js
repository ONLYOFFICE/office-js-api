// This example adds a table of figures with the specified properties to the document.
let tofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"};
doc.AddTableOfFigures(tofPr);