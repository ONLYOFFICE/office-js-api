// Lock the aspect ratio of a shape on a page in a PDF form.

// Keep width and height proportional so resizing preserves the shape's proportions.

// Create a shape, lock its aspect ratio, and display the applied lock state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetLockAspect(true);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Aspect ratio locked: " + shape.GetLockAspect());