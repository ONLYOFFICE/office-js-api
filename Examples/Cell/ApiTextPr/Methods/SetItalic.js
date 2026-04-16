// Set the italic property to the text character in a spreadsheet.

// How to make text italic in a spreadsheet.

// Set italic property of a text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetItalic(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font set to italicized letters using the text properties.");
paragraph.AddElement(run);