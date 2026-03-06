// This example shows how to convert EMUs (english metric units) to points.

const emus = 100;
const points = Api.EmusToPoints(emus);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(emus + ' emus are equal to ' + points + ' points.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);
