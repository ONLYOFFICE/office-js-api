// Convert twips to points in a PDF.

// How can I change twips to points in a PDF?

// Display the point equivalent of a twip measurement in a PDF.

const twips = 100;
const points = Api.TwipsToPoints(twips);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(twips + ' twips are equal to ' + points + ' points.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);