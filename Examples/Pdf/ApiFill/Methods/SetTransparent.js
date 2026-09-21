// Make a shape's fill semi-transparent on a page in a PDF.

// How do I make a shape's fill partially see-through in a PDF?

// Fade a shape's solid fill so the page content behind it shows through in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(39);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);
