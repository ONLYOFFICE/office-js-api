// This example sets the text properties to the current run.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a sample text with the font size set to 15 points and the font weight set to bold.");
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetBold(true);
run.SetTextPr(textProps);
paragraph.AddElement(run);