// Apply bold formatting to a text run inside a shape in a spreadsheet.

// How do I make text appear bold in a spreadsheet?

// Strengthen the visual weight of text by enabling the bold style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetBold(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font weight set to bold using the text properties.");
paragraph.AddElement(run);