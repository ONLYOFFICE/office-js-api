// Convert measurement units from lines to points in a PDF.

// How do I convert line measurements to points in a PDF?

// Translate line values to point measurements and display the result in a PDF.

const lines = 100;
const points = Api.LinesToPoints(lines);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(lines + ' lines are equal to ' + points + ' points.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);