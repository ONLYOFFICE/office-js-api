// Get the next inline drawing object following a shape in a document.

// How do I access the drawing that comes after a given shape in a document?

// Traverse sibling drawings and modify the properties of the following shape in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let copyDrawing = drawing.Copy();
paragraph.AddDrawing(copyDrawing);
let nextDrawing = drawing.GetNextDrawing();
nextDrawing.SetHorFlip(true);