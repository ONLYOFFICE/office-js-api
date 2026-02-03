// This example shows how to add a new custom XML part and then access it.

// How to add a custom XML part to the presentation.

// Add a new XML part.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
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
run.AddText("New XML part added: " + newXml.GetXml());
paragraph.AddElement(run);
slide.AddObject(shape);