// Check whether a PDF shape has an associated text body.

// Returns true if the shape already contains a text body, and false otherwise.

// Check the shape before and after CreateTextRange, then display both results in another shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);

const before = shape.IsTextRange();
shape.CreateTextRange().SetText("Sample");
const after = shape.IsTextRange();

const resultShape = Api.CreateShape("rect", 120 * 36000, 50 * 36000, fill, stroke);
resultShape.SetPosition(20 * 36000, 80 * 36000);
resultShape.GetContent().GetElement(0).AddText("Before CreateTextRange: " + before + "\rAfter CreateTextRange: " + after);
page.AddObject(resultShape);
