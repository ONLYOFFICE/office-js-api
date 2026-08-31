// Set a solid fill on a drawing object through the base ApiDrawing interface in a presentation.

// The SetFill method works for any graphic object on a slide, including images and groups, not only shapes.

// Add a rectangle to a slide and fill it with a solid blue-grey color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 150 * 36000, 80 * 36000, Api.CreateNoFill(), stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(96, 125, 139));
drawing.SetFill(fill);
