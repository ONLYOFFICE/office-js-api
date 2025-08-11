// This example shows how to get an attribute from the root element of a custom XML part.

// How to get an attribute from an XML part element.

// Get an XML attribute.

let oPresentation = Api.GetPresentation();
let xmlManager = oPresentation.GetCustomXmlParts();
let xml = xmlManager.Add("<config version='1.0' xmlns='http://example'><setting>value</setting></config>");
let rootNodes = xml.GetNodes('/config');
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
if (rootNodes.length > 0) {
    let version = rootNodes[0].GetAttribute('version');
    oRun.AddText("Config version: " + version);
} else {
    oRun.AddText("No root node found");
}
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);