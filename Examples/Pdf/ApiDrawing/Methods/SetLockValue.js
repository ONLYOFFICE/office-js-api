// Prevent a shape from being moved on a page in a PDF form.

// Apply a lock so the shape cannot be repositioned by the user.

// Create a shape, lock it against moving, and display the applied lock state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetLockValue("noMove", true);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("This drawing cannot be moved: " + shape.GetLockValue("noMove"));