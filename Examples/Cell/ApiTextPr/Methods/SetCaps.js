// This example specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.

// How to make text capitalized.

// Make all characters of a text as a capital letter.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetCaps(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape set to capital letters using the text properties.");
paragraph.AddElement(run);