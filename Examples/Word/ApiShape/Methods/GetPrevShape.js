// Retrieve the shape that appears before the current one in a document.

// How do I access the shape positioned just before another shape in a document?

// Navigate backward through stacked shapes to find the preceding element in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape1);
let shape2 = Api.CreateShape("wave", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape2);
let prevShape = shape2.GetPrevShape();
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
prevShape.Fill(fill);