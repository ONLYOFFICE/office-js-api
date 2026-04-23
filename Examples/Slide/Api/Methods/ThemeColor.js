// Create a theme color and use it as a shape fill in a presentation.

// Theme colors provide visual consistency across presentations through predefined palettes.

// Apply the theme color to a shape's solid fill using the Api object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const color = Api.ThemeColor('accent6');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);