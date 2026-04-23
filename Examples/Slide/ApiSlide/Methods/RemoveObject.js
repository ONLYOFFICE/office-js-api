// Remove a specific object from a slide by its index.

// Create multiple shapes on the slide.

// Delete one of them using the RemoveObject method.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
drawing.SetPosition(30 * 36000, 1267200);
drawing.SetSize(150 * 36000, 130 * 36000);

const copyDrawing = drawing.Copy();
copyDrawing.SetPosition(170 * 36000, 1267200);
copyDrawing.SetSize(150 * 36000, 130 * 36000);

slide.AddObject(drawing);
slide.AddObject(copyDrawing);
slide.RemoveObject(1, 1);