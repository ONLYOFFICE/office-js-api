// Save section settings as a portable data structure in a document.

// How do I export a section's configuration so it can be stored or reused in a document?

// Capture and restore the layout properties of a section in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a page size set in the current document section.");
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
let json = section.ToJSON(false, true);
let sectionFromJSON = Api.FromJSON(json);
let type = sectionFromJSON.GetClassType();
paragraph.AddLineBreak();
paragraph.AddText("Class type = " + type);