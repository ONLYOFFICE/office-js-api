// Apply a visible border around a drawing to define its edges in a spreadsheet.

// How do I add a colored outline to a shape in a spreadsheet?

// Style a drawing by giving it a solid border with a chosen color and thickness in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = worksheet.AddShape("cube", 90 * 36000, 27 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
drawing1.SetOutLine(stroke);