// This example shows how to convert pixels to english metric units.

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(pixels + ' pixels are equal to ' + emus + ' english metric units.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);
