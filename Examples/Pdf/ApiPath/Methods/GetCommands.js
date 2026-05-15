// Retrieve all the drawing instructions that define a shape's outline in a PDF.

// How do I access all steps of a shape's outline in a PDF?

// Get the complete list of commands that build a shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
let path = geometry.GetPath(0);
let commands = path.GetCommands();
let cmd = path.GetCommand(0);
let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Commands: " + path.GetCommandCount());
paragraph.AddText(", First: " + cmd.GetType() + " at (" + cmd.GetX() + ", " + cmd.GetY() + ")");
shape.SetPosition(1000000, 1000000);
page.AddObject(shape);