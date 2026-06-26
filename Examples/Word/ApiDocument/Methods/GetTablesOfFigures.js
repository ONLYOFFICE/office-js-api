// Return the collection of all tables of figures in the document.

// Add a captioned figure and an anchor paragraph where the table of figures appears.

// Get the tables of figures collection and add a table of figures replacing the anchor range.

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
