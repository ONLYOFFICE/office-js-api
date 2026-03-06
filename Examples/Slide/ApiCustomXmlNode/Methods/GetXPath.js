// This example returns the absolute XPath of the current XML node.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = '<zoo><animal species="Lion"><name>Leo</name></animal></zoo>';
const xml = xmlManager.Add(xmlText);
const node = xml.GetNodes('/zoo/animal/name')[0];
const xPath = node.GetXPath();

const fill = Api.CreateSolidFill(Api.HexColor('#1450A0'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XPath: ' + xPath);
