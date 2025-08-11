// This example shows how to get custom XML parts by their namespace.

// How to retrieve custom XML parts using their namespace.

// Get XML parts by namespace.

let oPresentation = Api.GetPresentation();
let xmlManager = oPresentation.GetCustomXmlParts();
xmlManager.Add("<config xmlns='http://example.com/config'><setting>value1</setting></config>");
xmlManager.Add("<data xmlns='http://example.com/data'><entry>value2</entry></data>");
xmlManager.Add("<info xmlns='http://example.com/config'><detail>value3</detail></info>");
let configParts = xmlManager.GetByNamespace("http://example.com/config");
let oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
let oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
let oDocContent = oShape.GetDocContent();
let oParagraph = oDocContent.GetElement(0);
let oRun = Api.CreateRun();
oRun.SetFontSize(60);
oRun.AddText("Found " + configParts.length + " XML parts with config namespace:");
oParagraph.AddElement(oRun);
for (let i = 0; i < configParts.length; i++) {
    let oRun2 = Api.CreateRun();
    oRun2.AddText("\nConfig part " + (i + 1) + ": " + configParts[i].GetXml());
    oParagraph.AddElement(oRun2);
}
oSlide.AddObject(oShape);