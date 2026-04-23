// Access the drawing that appears immediately before another drawing in a document.

// How do I get the preceding drawing object in a document?

// Apply a horizontal flip to the earlier shape in a sequence of drawings in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let copyDrawing = drawing.Copy();
paragraph.AddDrawing(copyDrawing);
let nextDrawing = copyDrawing.GetPrevDrawing();
nextDrawing.SetHorFlip(true);