// Convert points to lines in a PDF document.

// How to convert points to lines in a PDF document?

// Convert points to lines using the PDF document API.

const points = 100;
const lines = Api.PointsToLines(points);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(points + ' points are equal to ' + lines + ' lines.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);