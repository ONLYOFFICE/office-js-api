// Create no fill and remove the fill from the element in a PDF document.

// How to remove background fill from the object in a PDF document.

// Create no fill and apply it to the element in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("The stroke of this shape is transparent.");
page.AddObject(shape);