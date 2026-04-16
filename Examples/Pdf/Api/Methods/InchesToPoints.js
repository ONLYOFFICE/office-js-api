// Convert inches to points in a PDF document.

// How do I convert inches to points in a PDF document?

// Convert inches to points and display the result in a PDF document.

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