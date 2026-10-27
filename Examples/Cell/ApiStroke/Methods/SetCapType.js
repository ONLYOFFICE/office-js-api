// Set a square cap for the ends of a shape border in a spreadsheet.

// Change the cap type to control how the stroke ends are drawn.

// Create a line, retrieve its stroke, apply the square cap type, and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let line = worksheet.AddShape("line", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = line.GetLine();
let result = retrievedStroke.SetCapType("square");
worksheet.GetRange("A1").SetValue("Cap type set: " + result);
