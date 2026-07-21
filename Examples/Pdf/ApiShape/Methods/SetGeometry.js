// Use a custom drawing pattern for a shape in a PDF.

// How do I apply a custom shape design in a PDF?

// Replace a shape's default pattern with a personalized drawing outline in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(50 * 36000);
path.SetHeight(50 * 36000);
path.SetStroke(true);
path.SetFill("norm");
path.MoveTo(50 * 36000, 0);
path.LineTo(70 * 36000, 45 * 36000);
path.LineTo(55 * 36000, 70 * 36000);
path.LineTo(50 * 36000, 50 * 36000);
path.LineTo(0, 50 * 36000);
path.Close();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(50, 75, 100)));
let shape = Api.CreateShape("rect", 50 * 36000, 50 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);