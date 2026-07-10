// Set the outline of a drawing object through the base ApiDrawing interface in a presentation.

// SetLine is the base method for the outline and works for any graphic object on a slide, not only shapes.

// Add a rectangle to a slide and give it a dark solid outline.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
drawing.SetLine(outline);
