// Fill a shape with an image in a presentation.

// How do I set an image as the background of a shape in a presentation?

// Apply an image to a shape's background using a tiled fill pattern in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("star10", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);