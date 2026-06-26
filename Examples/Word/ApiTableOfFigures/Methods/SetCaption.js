// Change the caption label that a table of figures is built from.

// Add a captioned table and a table of figures built from the "Figure" label.

// Rebuild the table of figures so it collects entries by the "Table" caption label instead.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
table.AddCaption(" - Sample tables", "Table", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetCaption("Table");
