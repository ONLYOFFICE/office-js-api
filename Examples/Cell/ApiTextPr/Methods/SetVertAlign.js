// This example specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetVertAlign("superscript");
paragraph.SetJc("left");
run.AddText("This is a text inside the shape with vertical alignment set to 'superscript'.");
paragraph.AddElement(run);