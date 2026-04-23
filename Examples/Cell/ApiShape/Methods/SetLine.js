// Change the border of a rectangle to a thick blue line after it is placed on the sheet in a spreadsheet.

// How do I update the border style and color of a shape in a spreadsheet?

// Swap out a shape's existing border for a new stroke with a different thickness and color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
worksheet.GetRange("A1").SetValue("Original shape with no border");
let newStroke = Api.CreateStroke(3 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
shape.SetLine(newStroke);
worksheet.GetRange("A2").SetValue("Border changed to 3pt blue line");