// This example shows how to get the class type of a custom XML part.

// How to get the class type of an XML part.

// Get the class type.

let oPresentation = Api.GetPresentation();
let xmlManager = oPresentation.GetCustomXmlParts();
let xml = xmlManager.Add("<data><value>Sample</value></data>");
let classType = xml.GetClassType();
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
oRun.AddText("Class type: " + classType);
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);