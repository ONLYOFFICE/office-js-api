// Add a colored border to a shape in a document.

// How do I set the border color and thickness of a shape in a document?

// Give a shape a visible outline with a custom width and color in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
let shape = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);