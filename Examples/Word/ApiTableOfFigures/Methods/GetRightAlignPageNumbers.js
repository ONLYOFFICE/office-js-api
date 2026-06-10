// Check whether page numbers are right-aligned in a table of figures.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Read whether the page numbers are aligned to the right margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let isRightAlign = tof.GetRightAlignPageNumbers();
