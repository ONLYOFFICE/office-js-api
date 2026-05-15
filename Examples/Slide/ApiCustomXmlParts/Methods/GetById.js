// Get a custom XML part by its ID in a presentation.

// How do I find a custom XML part using its unique ID in a presentation?

// Display the retrieved XML part's content in a presentation.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xml = xmlManager.Add("<inventory><item>Book</item></inventory>");
let id = xml.GetId();
let retrievedXml = xmlManager.GetById(id);
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(60);
if (retrievedXml) {
    run.AddText("Found XML part: " + retrievedXml.GetXml());
} else {
    run.AddText("XML part not found");
}
paragraph.AddElement(run);
slide.AddObject(shape);