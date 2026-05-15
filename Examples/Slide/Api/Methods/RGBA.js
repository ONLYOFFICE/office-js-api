// Create an RGBA color with transparency and use it as a shape fill in a presentation.

// Use Api.RGBA to define colors with alpha channel transparency.

// Display the shape with the specified color on a slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const color = Api.RGBA(110, 160, 180, 127);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);