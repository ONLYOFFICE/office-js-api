// Fill text with a solid color in a shape in a spreadsheet.

// How do I change the color of text using a solid fill in a spreadsheet?

// Paint the interior of letters with a chosen color to style text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
fill = Api.CreateSolidFill(Api.RGB(128, 128, 128));
run.SetTextFill(fill);
paragraph.SetJc("left");
run.AddText("This is a text run with the gray text set using the text properties.");
paragraph.AddElement(run);