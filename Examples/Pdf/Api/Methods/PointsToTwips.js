// This example shows how to convert points to twips.

const points = 1000;
const twips = Api.PointsToTwips(points);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(points + ' points are equal to ' + twips + ' twips.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);
