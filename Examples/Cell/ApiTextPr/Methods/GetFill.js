// Read the color fill applied to text in a spreadsheet.

// How do I find out what color fill is used for text in a spreadsheet?

// Inspect the fill type assigned to a text style and display it inside a shape in a spreadsheet.

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
fill = Api.CreateSolidFill(Api.RGB(128, 128, 128));
textProps.SetFill(fill);
paragraph = Api.CreateParagraph();
fill = textProps.GetFill();
let type = fill.GetClassType();
paragraph.AddText("Text color type: " + type);
content.Push(paragraph);