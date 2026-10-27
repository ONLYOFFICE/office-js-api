// Get the alternative-text description of a drawing in a PDF form.

// Read the accessibility description previously assigned to the shape.

// Create a shape, set its description, then read it and display it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetDescription("My Drawing Description");
const description = shape.GetDescription();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing description: " + description);