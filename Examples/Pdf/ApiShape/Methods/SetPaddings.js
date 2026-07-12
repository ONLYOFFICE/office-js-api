// Set internal spacing for text content within a shape on a page in a PDF form.

// Add text to a shape, then apply asymmetric left, top, right, and bottom paddings.

// Control where the text sits inside the shape by setting each inset in English measure units.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Text with paddings: Left 2cm, Top 0.5cm, Right 0.5cm, Bottom 0.3cm");
shape.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);