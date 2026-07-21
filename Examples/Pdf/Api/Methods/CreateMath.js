// Build a math equation object and insert it into a shape's paragraph like a text run in a PDF.

// How do I insert a formula into a shape as if it were a run of text in a PDF?

// Produce a reusable equation object and place it into a shape's paragraph content in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const paragraph = shape.GetContent().GetElement(0);
const math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
