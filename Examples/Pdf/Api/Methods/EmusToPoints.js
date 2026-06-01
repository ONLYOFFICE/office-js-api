// Convert measurement units from emus to points in a PDF.

// How do I convert emus to points for sizing in a PDF?

// Translate emu values to point measurements and show the result in a PDF.

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