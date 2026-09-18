// Replace the whole text of a run in one call in a spreadsheet.

// How do I replace the text of a run without losing its formatting in a spreadsheet?

// Swap the wording of a run inside a shape while its formatting stays in place in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.SetBold(true);
run.SetFontSize(30);
run.AddText("Draft wording.");
paragraph.AddElement(run);
run.SetText("Final wording, still bold.");