// Place the page numbers right after the entry text in a table of figures.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Disable right alignment so page numbers follow the entry text directly.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetRightAlignPageNumbers(false);
