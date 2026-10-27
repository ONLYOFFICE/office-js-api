// Remove a table of figures from the document.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Delete the table of figures together with its container.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.Delete();
