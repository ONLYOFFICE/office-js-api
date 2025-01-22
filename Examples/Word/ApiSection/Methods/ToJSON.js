// This example converts the ApiSection object into the JSON object.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a page with a page size set in the current document section.");
let section = document.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
let json = section.ToJSON(false, true);
let sectionFromJSON = Api.FromJSON(json);
let type = sectionFromJSON.GetClassType();
paragraph.AddLineBreak();
paragraph.AddText("Class type = " + type);