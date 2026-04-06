// This example unselects the current graphic object.

// How to unselect drawing objects on the worksheet.

// Create three shapes, select all of them,
// then unselect the second shape.

let worksheet = Api.GetActiveSheet();
let fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke1 = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill1, stroke1, 0, 2 * 36000, 0, 3 * 36000);
let fill2 = Api.CreateSolidFill(Api.RGB(51, 133, 255));
let stroke2 = Api.CreateStroke(0, Api.CreateNoFill());
let drawing2 = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill2, stroke2, 10, 2 * 36000, 2, 3 * 36000);
let fill3 = Api.CreateSolidFill(Api.RGB(61, 255, 111));
let stroke3 = Api.CreateStroke(0, Api.CreateNoFill());
let drawing3 = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill3, stroke3, 20, 2 * 36000, 4, 3 * 36000);
drawing1.Select(true);
drawing2.Select();
drawing3.Select();
drawing2.Unselect();
