// Applies custom geometry with specific fill and stroke properties.
const doc = Api.GetDocument();
const page = doc.GetPage(0);

let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(283);
path.SetHeight(283);
path.SetStroke(true);
path.SetFill("norm");
path.MoveTo(142, 0);
path.LineTo(198, 128);
path.LineTo(156, 198);
path.LineTo(283, 283);
path.LineTo(0, 283);
path.Close();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(50, 75, 100)));
let shape = Api.CreateShape("rect", 283, 283, fill, stroke);
shape.SetGeometry(customGeometry);
shape.SetPosition(157, 79);
page.AddObject(shape);