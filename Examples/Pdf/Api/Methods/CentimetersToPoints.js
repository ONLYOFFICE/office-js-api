// Convert a distance from centimeters to points in a PDF.

// How do I convert centimeters to points in a PDF?

// Display a measurement conversion in a shape in a PDF.

const centimeters = 1000;
const points = Api.CentimetersToPoints(centimeters);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(centimeters + ' centimeters are equal to ' + points + ' points.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);