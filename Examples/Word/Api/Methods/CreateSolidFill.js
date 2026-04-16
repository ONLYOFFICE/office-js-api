// Create a solid fill in a document.

// Create a solid fill to apply to the shape using the selected solid color as the shape background in a document.

// How to create the fill object which represents a solid fill and apply it to the shape class in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);