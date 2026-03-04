// This example shows how to convert millimeters to pixels.

const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(millimeters + ' millimeters are equal to ' + pixels + ' pixels.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);
