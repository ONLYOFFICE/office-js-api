// Read the beginning arrow of a shape border in a PDF.

// How do I find out which arrow is applied to the start of a shape's outline in a PDF?

// Apply a beginning arrow to a shape's stroke, then read back its type, width, and length in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
let retrievedStroke = shape.GetLine();
retrievedStroke.SetBeginArrow("triangle", "medium", "large");
let arrow = retrievedStroke.GetBeginArrow();
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Begin arrow type: " + (arrow ? arrow.Type : "not set"));
