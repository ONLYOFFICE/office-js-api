// Add text to a drawing on a PDF page that has no text body yet.

// The text body is created on demand, and the returned range covers it entirely.

// Create the text body of the drawing and fill it through the returned range.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const range = shape.CreateTextRange();
range.AddText("Hello World");