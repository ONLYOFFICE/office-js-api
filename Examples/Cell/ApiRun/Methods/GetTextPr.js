// Read the text formatting properties of a run in a spreadsheet.

// How do I check what font size and style a text run is using in a spreadsheet?

// Inspect the current formatting of a run before applying new styles in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font size set to 15 points using the text properties.");
paragraph.AddElement(run);