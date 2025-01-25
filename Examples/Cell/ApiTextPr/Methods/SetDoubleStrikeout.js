// This example specifies that the contents of the run are displayed with two horizontal lines through each character displayed on the line.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetDoubleStrikeout(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape struck out with two lines using the text properties.");
paragraph.AddElement(run);