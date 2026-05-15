// Apply a gradient color fill to a shape in a presentation.

// How do I add a color gradient effect to a shape in a presentation?

// Set the background fill of a shape with a radial gradient in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 150 * 36000, 80 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const gradientFill = Api.CreateRadialGradientFill([gs1, gs2]);
drawing.Fill(gradientFill);