// This example adds a table of figures of the distinctive style to the document.
var sTofStyle = "distinctive";
var oTofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": sTofStyle};
oDocument.AddTableOfFigures(oTofPr);