// Apply a colored border around the letters of a text run in a spreadsheet.

// How do I add an outline stroke to text in a spreadsheet?

// Give text a visible edge by drawing a colored line around each character in a spreadsheet.

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
stroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(128, 128, 128)));
run.SetOutLine(stroke);
run.AddText("This is a text run with the gray text outline.");
paragraph.AddElement(run);