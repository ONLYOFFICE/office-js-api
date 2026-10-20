// Merge two overlapping shapes into a single shape in a document.

// Build a custom shape from simple shapes with the union operation.

// Unite a rectangle and an ellipse into one shape filled with the color of the rectangle.

let doc = Api.GetDocument();
let fill1 = Api.CreateSolidFill(Api.Color(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.Color(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let rectangle = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill1, stroke);
let ellipse = Api.CreateShape("ellipse", 40 * 36000, 40 * 36000, fill2, stroke);
doc.AddDrawingToPage(rectangle, 0, 30 * 36000, 40 * 36000);
doc.AddDrawingToPage(ellipse, 0, 70 * 36000, 40 * 36000);
Api.MergeShapes([rectangle, ellipse], "union");
