// Check whether the table of figures entries are formatted as hyperlinks.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Read whether the entries link to their target captions.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let isUseHyperlinks = tof.GetUseHyperlinks();
