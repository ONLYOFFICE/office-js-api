// Get the first control point x coordinate of a curve in a presentation.

// How do I find the starting control point position of a curve in a presentation?

// Read curve control points to verify bezier path geometry in a presentation.

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
let cmd = path.GetCommand(1);
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("CP1: (" + cmd.GetX0() + ", " + cmd.GetY0() + "), ");
paragraph.AddText("CP2: (" + cmd.GetX1() + ", " + cmd.GetY1() + "), ");
paragraph.AddText("End: (" + cmd.GetX2() + ", " + cmd.GetY2() + ")");
shape.SetVerticalTextAlign("bottom");
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);