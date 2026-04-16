// Set a solid fill color to a shape. Creates a rectangle and apply a red fill to it in a PDF document.

// How do I set fill in a PDF document?

// Set fill using a shape object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, Api.CreateNoFill(), stroke);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Original shape with no fill");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0));
shape.SetFill(fill);
paragraph.AddLineBreak();
paragraph.AddText("Fill changed to red");