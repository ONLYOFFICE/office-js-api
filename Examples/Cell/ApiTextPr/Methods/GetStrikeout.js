// Get a text strikeout using its property in a spreadsheet.

// How to find out whether a text is stroke out or not in a spreadsheet.

// Get cross out property of a text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
let textProps = run.GetTextPr();
textProps.SetStrikeout(true);
paragraph = Api.CreateParagraph();
let isStrikeout = textProps.GetStrikeout();
paragraph.AddText("Strikeout property: " + isStrikeout);
content.Push(paragraph);