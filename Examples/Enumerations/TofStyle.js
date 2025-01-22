// This example adds a table of figures of the distinctive style to the document.
let tofStyle = "distinctive";
let tofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": tofStyle};
doc.AddTableOfFigures(tofPr);