// This example sets the text spacing measured in twentieths of a point.

// How to set space size of a text.

// Change spacing size.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetSpacing(80);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the spacing set to 4 points (80 twentieths of a point).");
paragraph.AddElement(run);