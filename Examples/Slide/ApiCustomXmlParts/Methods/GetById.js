// This example shows how to get a custom XML part by its ID.

// How to retrieve a custom XML part using its ID.

// Get an XML part by its ID.

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