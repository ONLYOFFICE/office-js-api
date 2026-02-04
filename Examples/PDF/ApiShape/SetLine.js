// Sets the outline properties to a shape.
// Creates a rectangle and changes its outline to a thick blue line.
const doc = Api.GetDocument();
const page = doc.GetPage(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Original shape with no border");
let newStroke = Api.CreateStroke(3 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
shape.SetLine(newStroke);
paragraph.AddLineBreak();
paragraph.AddText("Border changed to 3pt blue line");
