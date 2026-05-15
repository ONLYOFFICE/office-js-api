// Retrieve a specific drawing command from a shape's geometry path in a presentation.

// How do I access individual drawing commands in a custom shape in a presentation?

// Get and inspect a single path command from a shape's geometry in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
let path = geometry.GetPath(0);
let commands = path.GetCommands();
let cmd = path.GetCommand(0);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Commands: " + path.GetCommandCount());
paragraph.AddText(", First: " + cmd.GetType() + " at (" + cmd.GetX() + ", " + cmd.GetY() + ")");
shape.SetPosition(1000000, 1000000);
slide.AddObject(shape);