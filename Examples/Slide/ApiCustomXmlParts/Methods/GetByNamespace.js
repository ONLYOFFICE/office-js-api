// This example shows how to get custom XML parts by their namespace.

// How to retrieve custom XML parts using their namespace.

// Get XML parts by namespace.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
xmlManager.Add("<config xmlns='http://example.com/config'><setting>value1</setting></config>");
xmlManager.Add("<data xmlns='http://example.com/data'><entry>value2</entry></data>");
xmlManager.Add("<info xmlns='http://example.com/config'><detail>value3</detail></info>");
let configParts = xmlManager.GetByNamespace("http://example.com/config");
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
run.AddText("Found " + configParts.length + " XML parts with config namespace:");
paragraph.AddElement(run);
for (let i = 0; i < configParts.length; i++) {
    let run2 = Api.CreateRun();
    run2.AddText("\nConfig part " + (i + 1) + ": " + configParts[i].GetXml());
    paragraph.AddElement(run2);
}
slide.AddObject(shape);