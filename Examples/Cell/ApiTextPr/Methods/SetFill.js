// This example sets the text color to the current text run.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
fill = Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128));
textProps.SetFill(fill);
run.AddText("This is a text run with the font color set to gray.");
paragraph.AddElement(run);