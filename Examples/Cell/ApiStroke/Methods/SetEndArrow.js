// Add an arrowhead to the end of a shape border in a spreadsheet.

// How do I set the ending arrow of a shape's outline in a spreadsheet?

// Create a shape, retrieve its stroke, and apply a stealth arrow to the end of the border line in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = worksheet.AddShape("line", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetEndArrow("stealth", "medium", "large");
worksheet.GetRange("A1").SetValue("End arrow set: " + result);
