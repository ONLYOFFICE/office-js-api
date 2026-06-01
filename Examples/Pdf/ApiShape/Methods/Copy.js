// Duplicate a shape and place the copy on another page in a PDF.

// How do I make a copy of a shape in a PDF?

// Create an exact duplicate of a shape and add it to a new page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const copyShape = shape.Copy();
const newPage = doc.AddPage(1);
newPage.AddObject(copyShape);
