// Determine whether a shape is flipped left-to-right on a page in a PDF form.

// Read the horizontal flip state of a shape after applying a mirror transform.

// Create a shape, flip it horizontally, then read and display the flip state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rightArrow", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetFlipH(true);
const flip = shape.GetFlipH();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing is flipped horizontally: " + flip);