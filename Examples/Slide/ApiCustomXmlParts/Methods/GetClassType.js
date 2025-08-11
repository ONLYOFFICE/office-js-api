// This example shows how to get the class type of the custom XML parts manager.

// How to get the class type of the XML parts manager.

// Get the class type.

let oPresentation = Api.GetPresentation();
let xmlManager = oPresentation.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
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
oRun.AddText("XML manager class type: " + classType);
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);