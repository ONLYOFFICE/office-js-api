// This example shows how to get the ID of a custom XML part.

// How to get the ID of an XML part.

// Get an XML part ID.

let oPresentation = Api.GetPresentation();
let xmlManager = oPresentation.GetCustomXmlParts();
let xml = xmlManager.Add("<settings><theme>dark</theme></settings>");
let id = xml.GetId();
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
oRun.AddText("XML part ID: " + id);
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);