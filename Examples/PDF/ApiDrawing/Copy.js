// How to create the same page shape.

// Get a page shape, add it to the page and create its copy.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(150 * 36000, 65 * 36000);
page.AddObject(shape);

const copyShape = shape.Copy();
const newPage = doc.AddPage(1);
newPage.AddObject(copyShape);