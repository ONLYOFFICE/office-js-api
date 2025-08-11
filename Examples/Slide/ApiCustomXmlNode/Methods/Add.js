// This example shows how to create a new child node and insert it as a child of the current XML node.

// How to add a child node to an XML node.

// Add a new child node.

let oPresentation = Api.GetPresentation();
let xmlManager = oPresentation.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>Hello World!</text></content>");
let rootNode = xml.GetNodes("/content")[0];
let textNode = rootNode.Add("text");
let classType = textNode.GetClassType();
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