// Extracts control points from a cubic bezier curve in a presentation.
// Displays all control point coordinates in a text shape.
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
let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(50, 75, 100)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("CP1: (" + cmd.GetX0() + ", " + cmd.GetY0() + "), ");
paragraph.AddText("CP2: (" + cmd.GetX1() + ", " + cmd.GetY1() + "), ");
paragraph.AddText("End: (" + cmd.GetX2() + ", " + cmd.GetY2() + ")");
shape.SetVerticalTextAlign("bottom");
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);