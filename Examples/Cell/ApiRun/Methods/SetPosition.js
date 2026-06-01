// Raise or lower a text run relative to the surrounding text baseline in a spreadsheet.

// How do I shift text up or down without changing its font size in a spreadsheet?

// Adjust the vertical offset of a word or phrase to create superscript or subscript-like effects in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is a text run with the text raised 10 half-points.");
run.SetPosition(10);
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is a text run with the text lowered 16 half-points.");
run.SetPosition(-16);
paragraph.AddElement(run);