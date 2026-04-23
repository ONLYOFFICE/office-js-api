// Draw a horizontal line through the middle of a text run to mark it as crossed out in a spreadsheet.

// How do I put a line through text to show it has been removed or cancelled in a spreadsheet?

// Strike through selected words to visually indicate deleted or outdated content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStrikeout(true);
run.AddText("This is a text run with the text struck out with a single line.");
paragraph.AddElement(run);