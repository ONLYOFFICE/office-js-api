// Duplicate a text run and add both the original and the copy to a paragraph in a spreadsheet.

// How do I reuse the same styled text run more than once in a spreadsheet?

// Clone an existing run so its formatting and content appear twice without rewriting it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run);
let copyRun = run.Copy();
paragraph.AddElement(copyRun);