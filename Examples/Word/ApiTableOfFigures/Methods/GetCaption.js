// Get the caption label that a table of figures is built from.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Read the caption label that the table of figures collects its entries by.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let caption = tof.GetCaption();
