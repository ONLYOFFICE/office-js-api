// Read the luminance shift stored in a theme color on a PDF page.

// The shift is kept together with the theme name, so a lightened accent stays a theme color.

// Fill a shape with a lightened accent and show the shift in a second shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const accent = Api.ThemeColor("accent1", 0.4);
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, Api.CreateSolidFill(accent), stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, Api.CreateSolidFill(Api.RGB(240, 240, 240)), stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("Tint: " + accent.GetTintAndShade() + ", color: " + accent.GetHex());