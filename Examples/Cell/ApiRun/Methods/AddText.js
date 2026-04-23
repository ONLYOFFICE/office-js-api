// Write text into a run and place it inside a shape on a worksheet in a spreadsheet.

// How do I put readable text inside a shape in a spreadsheet?

// Build a styled text run and attach it to a paragraph within a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(30);
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);