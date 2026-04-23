// Apply a color from the document's theme to a shape in a PDF.

// How do I use a theme color instead of a custom color in a PDF?

// Fill a shape with an accent color from the theme in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const color = Api.ThemeColor('accent6');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);