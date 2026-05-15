// Apply a solid color fill to change the color of a text run in a spreadsheet.

// How do I set a specific color for text using a fill in a spreadsheet?

// Paint text with a chosen color by assigning a solid fill to its formatting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
fill = Api.CreateSolidFill(Api.RGB(128, 128, 128));
textProps.SetFill(fill);
run.AddText("This is a text run with the font color set to gray.");
paragraph.AddElement(run);