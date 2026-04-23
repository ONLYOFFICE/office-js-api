// Convert picas to points in a PDF document.

// The API method performs measurement unit conversion.

// The result is displayed in a shape text element.

const picas = 100;
const points = Api.PicasToPoints(picas);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(picas + ' picas are equal to ' + points + ' points.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);