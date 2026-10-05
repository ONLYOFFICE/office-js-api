// Show the name of a theme color scheme in a presentation.

// Identify the color scheme that the presentation theme uses.

// Get the name of the color scheme and write it into a shape on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const colorScheme = presentation.GetMaster(0).GetTheme().GetColorScheme();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.GetContent().GetElement(0).AddText("Color scheme: " + colorScheme.GetSchemeName());
slide.AddObject(shape);