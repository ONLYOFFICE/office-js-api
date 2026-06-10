// Count how many tables of figures the document contains.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Read the number of tables of figures currently present in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tablesOfFigures = doc.GetTablesOfFigures();
tablesOfFigures.Add({"BuildFrom": "Figure", "LabelNumber": true});
let count = tablesOfFigures.GetCount();
