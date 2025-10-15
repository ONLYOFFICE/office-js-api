// This example shows how to get the XML string representation of a custom XML node.

// How to get XML content from an XML node.

// Get XML node content.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xml = xmlManager.Add("<book><title>JavaScript Guide</title><author>John Smith</author></book>");
let bookNode = xml.GetNodes('/book')[0];
let xmlString = bookNode.GetXml();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(60);
run.AddText("XML content:\n" + xmlString);
paragraph.AddElement(run);
slide.AddObject(shape);