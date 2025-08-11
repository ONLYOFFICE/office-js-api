// This example shows how to add a new custom XML part and then access it.

// How to add a custom XML part to the presentation.

// Add a new XML part.

let oPresentation = Api.GetPresentation();
let xmlManager = oPresentation.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
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
oRun.AddText("New XML part added: " + newXml.GetXml());
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);