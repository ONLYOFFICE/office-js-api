// Mirror a shape top-to-bottom on a page in a PDF form.

// Reverse a shape vertically so its geometry is mirrored across the horizontal axis.

// Create a shape, flip it vertically, and display the resulting flip state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("upArrow", 60 * 36000, 120 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetFlipV(true);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing is flipped vertically: " + shape.GetFlipV());