// Insert a new table of figures that replaces a specified range in the document.

// Add a captioned figure, then place an anchor paragraph where the table of figures should appear.

// Add the table of figures to the collection, replacing the anchor range, and return it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let anchor = Api.CreateParagraph();
anchor.AddText("Table of figures goes here");
doc.Push(anchor);
let tablesOfFigures = doc.GetTablesOfFigures();
let range = anchor.GetRange();
let tof = tablesOfFigures.Add({"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"}, range);
