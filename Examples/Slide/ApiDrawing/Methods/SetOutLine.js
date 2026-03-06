// This example sets the outline properties to the specified graphic object.

// How to outline the drawing with the stroke.

// Set the borders of the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing2 = Api.CreateShape("cube", 150 * 36000, 80 * 36000, fill, stroke);
drawing2.SetPosition(608400, 3267200);
let stroke2 = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
drawing2.SetOutLine(stroke2);
slide.AddObject(drawing2);
