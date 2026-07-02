// Add an arrowhead to the start of a shape border in a spreadsheet.

// How do I set the beginning arrow of a shape's outline in a spreadsheet?

// Create a shape, retrieve its stroke, and apply a triangle arrow to the start of the border line in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = worksheet.AddShape("line", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetBeginArrow("triangle", "medium", "large");
worksheet.GetRange("A1").SetValue("Begin arrow set: " + result);
