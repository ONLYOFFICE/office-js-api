// Check whether text is set to display in capital letters in a spreadsheet.

// How do I find out if all-caps formatting is applied to text in a spreadsheet?

// Read the capitalization setting from a text style and display the result in a spreadsheet.

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
textProps.SetCaps(true);
paragraph = Api.CreateParagraph();
let isCaps = textProps.GetCaps();
paragraph.AddText("Property of the capitalized letters: " + isCaps);
content.Push(paragraph);