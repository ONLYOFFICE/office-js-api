// Add Unicode code points with exact character widths to a text run in a spreadsheet.

// How do I insert characters preserving their exact widths into a text run in a spreadsheet?

// Fill a text run inside a shape with the "Widths" word so that every character keeps the width specified in millimeters.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(30);
run.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);
paragraph.AddElement(run);
