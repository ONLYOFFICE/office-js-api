// This example demonstrates how to delete an XML element from a custom XML part.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xml = xmlManager.Add('<content xmlns="http://example"><text>example_text</text><imaginaryNode>text inside imaginary node</imaginaryNode></content>');
xml.DeleteElement('/content/imaginaryNode');

const fill = Api.CreateSolidFill(Api.RGB(156, 90, 161));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after deletion: ' + xml.GetXml());
