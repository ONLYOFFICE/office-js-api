// Assign a name to a shape on a page in a PDF form.

// Give a page shape a recognizable name so tools can reference it.

// Create a shape, assign a name, and display the applied name inside it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetName("CustomShapeName");
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Shape name was set to: " + shape.GetName());