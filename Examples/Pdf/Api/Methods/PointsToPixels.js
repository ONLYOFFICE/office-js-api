// This example shows how to convert points to pixels.

const points = 1000;
const pixels = Api.PointsToPixels(points);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(points + ' points are equal to ' + pixels + ' pixels.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);
