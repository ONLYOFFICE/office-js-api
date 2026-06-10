// Get the class type of a table of figures object.

// Add a captioned figure and a table of figures built from the "Figure" label.

// Read the class type string that identifies the table of figures.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let classType = tof.GetClassType();
