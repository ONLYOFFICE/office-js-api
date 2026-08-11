// Get the full text range of a PDF shape that already has a text body.

// Returns null if the shape has no text body; use CreateTextRange to initialize one first.

// Create a shape, initialize its text body, then retrieve and format its text with GetTextRange.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);

shape.CreateTextRange().SetText("Hello World");
const range = shape.GetTextRange();
range.SetBold(true);
