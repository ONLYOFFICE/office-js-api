// Set a solid fill on a drawing object through the base ApiDrawing interface in a document.

// The SetFill method works for any graphic object, including images and groups, not only shapes.

// Add a rectangle to a document and fill it with a solid blue-grey color.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, Api.CreateNoFill(), stroke);
paragraph.AddDrawing(drawing);
let fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
drawing.SetFill(fill);
