// Format the table of figures entries as hyperlinks.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Enable hyperlinks so each entry links to its caption.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetUseHyperlinks(true);
