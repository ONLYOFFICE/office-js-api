// Exclude the caption label and number from a table of figures entries.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Rebuild the table of figures so the entries show only the caption text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetIncludeLabel(false);
