// This example specifies that the contents of the current run are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line).
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetUnderline(true);
paragraph.SetJc("left");
run.AddText("This is an underlined text inside the shape.");
paragraph.AddElement(run);