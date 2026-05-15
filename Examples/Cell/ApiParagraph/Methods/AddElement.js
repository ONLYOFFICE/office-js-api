// Insert a formatted text run into a paragraph inside a shape in a spreadsheet.

// How do I append a styled piece of text to an existing paragraph in a spreadsheet?

// Build a run with custom content and attach it to the paragraph as a new element in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text run. Nothing special.");
paragraph.AddElement(run);