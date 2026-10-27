// Refresh a table of figures after the document content changes.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Rebuild the table of figures so it reflects the current captions and page numbers.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.Update();
