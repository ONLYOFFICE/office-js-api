// Convert measurement units from inches to points in a PDF.

// How do I convert inches to points for sizing in a PDF?

// Translate inch values to point measurements and show the conversion in a PDF.

const inches = 100;
const points = Api.InchesToPoints(inches);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(inches + ' inches are equal to ' + points + ' points.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);