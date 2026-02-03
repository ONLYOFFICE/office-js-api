// Analyzes arc command parameters in a presentation shape.
// Retrieves and displays arc radii and angle information.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(100 * 36000);
path.SetHeight(100 * 36000);
path.MoveTo(0, 50 * 36000);
path.CubicBezTo(0, 0, 50 * 36000, 0, 50 * 36000, 50 * 36000);
path.QuadBezTo(100 * 36000, 50 * 36000, 100 * 36000, 100 * 36000);
path.ArcTo(50 * 36000, 50 * 36000, 0, 10800000);
path.Close();
let cmd = path.GetCommand(3); // arc command
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Arc WR: " + cmd.GetWR() + ", HR: " + cmd.GetHR());
paragraph.AddText(", Start: " + cmd.GetStartAngle() + ", Sweep: " + cmd.GetSweepAngle());
shape.SetPosition(1500000, 1500000);
shape.SetVerticalTextAlign("bottom");
slide.AddObject(shape);