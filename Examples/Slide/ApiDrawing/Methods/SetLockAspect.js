// This example sets whether the aspect ratio of the drawing is locked.

// How to lock the aspect ratio of a shape in a presentation.

// Create a shape, lock its aspect ratio and display the result.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetLockAspect(true);
let docContent = drawing.GetContent();
let lockAspect = drawing.GetLockAspect();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Aspect ratio locked: " + lockAspect);
slide.AddObject(drawing);
