// This example sets whether the aspect ratio of the drawing is locked.

// How to lock the aspect ratio of a shape in a text document.

// Create a shape, lock its aspect ratio and display the result.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
drawing.SetLockAspect(true);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetContent();
let lockAspect = drawing.GetLockAspect();
let innerParagraph = Api.CreateParagraph();
innerParagraph.AddText("Aspect ratio locked: " + lockAspect);
docContent.AddElement(0, innerParagraph);
