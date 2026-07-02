// Read the ending arrow of a shape border in a spreadsheet.

// How do I find out which arrow is applied to the end of a shape's outline in a spreadsheet?

// Apply an ending arrow to a shape's stroke, then read back its type, width, and length in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = worksheet.AddShape("line", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
retrievedStroke.SetEndArrow("stealth", "medium", "large");
let arrow = retrievedStroke.GetEndArrow();
worksheet.GetRange("A1").SetValue("End arrow type: " + (arrow ? arrow.Type : "not set"));
