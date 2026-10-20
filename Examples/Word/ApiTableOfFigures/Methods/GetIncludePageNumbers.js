// Check whether a table of figures shows page numbers.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Read whether page numbers are included in the table of figures entries.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let isInclude = tof.GetIncludePageNumbers();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Page numbers included: " + isInclude);
doc.Push(resultParagraph);
