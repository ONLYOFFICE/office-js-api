// This example scales the height of the figure using the specified coefficient.

// How to increase the height of the drawing.

// Make the cube longer.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
for (let i = 3; i > 0; i--) {
    let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
    let stroke = Api.CreateStroke(0, Api.CreateNoFill());
    let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
    paragraph.AddDrawing(drawing);
    drawing.ScaleHeight(i);
}