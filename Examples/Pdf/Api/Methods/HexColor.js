// Fill a shape with a color defined by a hex code in a PDF.

// How do I apply a hex color to a shape in a PDF?

// Create a color from a hex value and use it to fill a rectangle in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const color = Api.HexColor('#DECADE');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);