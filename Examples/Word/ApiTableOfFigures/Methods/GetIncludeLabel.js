// Check whether a table of figures includes the caption label and number.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Read whether the caption label and number are shown in the table of figures entries.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let isIncludeLabel = tof.GetIncludeLabel();
