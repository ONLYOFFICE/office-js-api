// Merge two overlapping shapes into a single shape on a slide.

// Build a custom shape from simple shapes with the union operation.

// Unite a rectangle and an ellipse on the first slide into one shape filled with the color of the rectangle.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill1 = Api.CreateSolidFill(Api.Color(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.Color(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let rectangle = Api.CreateShape("rect", 80 * 36000, 50 * 36000, fill1, stroke);
let ellipse = Api.CreateShape("ellipse", 50 * 36000, 50 * 36000, fill2, stroke);
rectangle.SetPosition(40 * 36000, 40 * 36000);
ellipse.SetPosition(100 * 36000, 40 * 36000);
slide.AddObject(rectangle);
slide.AddObject(ellipse);
Api.MergeShapes([rectangle, ellipse], "union");
