// Set the XML content for the current node in a presentation.

// Replace a custom XML node with new XML content in a presentation.

// Update the value of an existing custom XML node in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = '<bookstore><book><title lang="en">The Odyssey</title><author>Homer</author></book></bookstore>';
const xml = xmlManager.Add(xmlText);
const node = xml.GetNodes('/bookstore/book')[0];
node.SetNodeValue('<book><title lang="en">JavaScript Guide</title></book>');

const fill = Api.CreateSolidFill(Api.HexColor('#BF0000'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after update: ' + xml.GetXml());