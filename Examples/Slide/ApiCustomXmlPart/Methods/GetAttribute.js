// This example shows how to get an attribute from the root element of a custom XML part.

// How to get an attribute from an XML part element.

// Get an XML attribute.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xml = xmlManager.Add("<config version='1.0' xmlns='http://example'><setting>value</setting></config>");
let rootNodes = xml.GetNodes('/config');
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
if (rootNodes.length > 0) {
    let version = rootNodes[0].GetAttribute('version');
    run.AddText("Config version: " + version);
} else {
    run.AddText("No root node found");
}
paragraph.AddElement(run);
slide.AddObject(shape);