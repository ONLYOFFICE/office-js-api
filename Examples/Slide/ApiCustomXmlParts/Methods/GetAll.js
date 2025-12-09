// This example shows how to get all custom XML parts.

// How to retrieve all custom XML parts from the presentation.

// Get all XML parts.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
xmlManager.Add("<employees><employee>John</employee></employees>");
xmlManager.Add("<departments><department>IT</department></departments>");
xmlManager.Add("<projects><project>Website</project></projects>");
let allParts = xmlManager.GetAll();
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
run.AddText("Total XML parts: " + allParts.length);
paragraph.AddElement(run);
for (let i = 0; i < allParts.length; i++) {
    let run2 = Api.CreateRun();
    run2.AddText("\nPart " + (i + 1) + ": " + allParts[i].GetXml());
    paragraph.AddElement(run2);
}
slide.AddObject(shape);