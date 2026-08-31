// Read the beginning arrow of a shape border in a spreadsheet.

// How do I find out which arrow is applied to the start of a shape's outline in a spreadsheet?

// Apply a beginning arrow to a shape's stroke, then read back its type, width, and length in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = worksheet.AddShape("line", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
retrievedStroke.SetBeginArrow("triangle", "medium", "large");
let arrow = retrievedStroke.GetBeginArrow();
worksheet.GetRange("A1").SetValue("Begin arrow type: " + (arrow ? arrow.Type : "not set"));
