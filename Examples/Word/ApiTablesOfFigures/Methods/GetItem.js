// Get a table of figures by its index from the document collection.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Retrieve the first table of figures from the collection by its zero-based index.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tablesOfFigures = doc.GetTablesOfFigures();
tablesOfFigures.Add({"BuildFrom": "Figure", "LabelNumber": true});
let tof = tablesOfFigures.GetItem(0);
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Item class type: " + tof.GetClassType());
doc.Push(resultParagraph);
