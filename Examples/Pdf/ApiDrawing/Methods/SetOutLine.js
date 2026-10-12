// Add a border to a shape on a page in a PDF form.

// Apply a colored stroke as the shape's outline using the drawing's outline setter.

// Create a shape, build a stroke, and set it as the outline with SetOutLine.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
const outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
shape.SetOutLine(outline);