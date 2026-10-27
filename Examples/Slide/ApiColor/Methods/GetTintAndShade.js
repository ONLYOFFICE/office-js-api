// Read the luminance shift stored in a theme color in a presentation.

// A lightened theme color keeps both its theme name and the size of the shift.

// Fill a shape with a lightened accent and show the shift in a second shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const accent = Api.ThemeColor("accent1", 0.4);
const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000, Api.CreateSolidFill(accent), stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const report = Api.CreateShape("rect", 300 * 36000, 80 * 36000, Api.CreateSolidFill(Api.RGB(240, 240, 240)), stroke);
report.SetPosition(608400, 4000000);
report.GetDocContent().GetElement(0).AddText("Tint: " + accent.GetTintAndShade() + ", color: " + accent.GetHex());
slide.AddObject(report);