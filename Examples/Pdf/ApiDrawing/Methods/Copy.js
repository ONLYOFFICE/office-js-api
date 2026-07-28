// Create a duplicate of a shape on a different page in a PDF.

// Copy a shape to another location in a PDF.

// Make an identical copy of a drawing object in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(150 * 36000, 65 * 36000);
page.AddObject(shape);

const copyShape = shape.Copy();
const newPage = doc.AddPage(0);
newPage.AddObject(copyShape);