// Merge two overlapping shapes into a single shape on a worksheet.

// Build a custom shape from simple shapes with the union operation.

// Unite a rectangle and an ellipse on the active sheet into one shape filled with the color of the rectangle.

let worksheet = Api.GetActiveSheet();
let fill1 = Api.CreateSolidFill(Api.Color(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.Color(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let rectangle = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill1, stroke, 1, 0, 2, 0);
let ellipse = worksheet.AddShape("ellipse", 80 * 36000, 80 * 36000, fill2, stroke, 2, 2 * 36000, 2, 0);
Api.MergeShapes([rectangle, ellipse], "union");
