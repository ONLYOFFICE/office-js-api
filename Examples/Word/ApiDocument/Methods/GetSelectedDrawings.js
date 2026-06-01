// Retrieve all drawings that are currently selected in a document.

// How do I get a reference to the selected drawings in a document?

// Resize a shape after selecting it by accessing it through the selected drawings collection in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.Select();
let drawings = doc.GetSelectedDrawings();
drawings[0].SetSize(2 * 914400, 2 * 914400);