// Display lowercase letters as capitals in a text run in a spreadsheet.

// How do I make all letters in a text run appear as uppercase in a spreadsheet?

// Force a visual all-caps style on a run without changing the underlying text in a spreadsheet.

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
run.SetCaps(true);
run.AddText("This is a text run with the font set to capitalized letters.");
paragraph.AddElement(run);