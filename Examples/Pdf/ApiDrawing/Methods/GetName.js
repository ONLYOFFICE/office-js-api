// Get the name of a shape in a PDF form.

// Read the name assigned to a drawing to identify it among page objects.

// Create a shape, set its name, then read the name and display it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetName("MyShape");
const name = shape.GetName();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing name: " + name);