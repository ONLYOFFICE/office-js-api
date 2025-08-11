// This example shows how to get all custom XML parts.

// How to retrieve all custom XML parts from the presentation.

// Get all XML parts.

let oPresentation = Api.GetPresentation();
let xmlManager = oPresentation.GetCustomXmlParts();
xmlManager.Add("<employees><employee>John</employee></employees>");
xmlManager.Add("<departments><department>IT</department></departments>");
xmlManager.Add("<projects><project>Website</project></projects>");
let allParts = xmlManager.GetAll();
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
oRun.AddText("Total XML parts: " + allParts.length);
oParagraph.AddElement(oRun);
for (let i = 0; i < allParts.length; i++) {
    let oRun2 = Api.CreateRun();
    oRun2.AddText("\nPart " + (i + 1) + ": " + allParts[i].GetXml());
    oParagraph.AddElement(oRun2);
}
oSlide.AddObject(oShape);