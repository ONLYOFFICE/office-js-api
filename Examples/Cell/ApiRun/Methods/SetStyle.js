// Apply a predefined text style to a run of characters in a spreadsheet.

// How do I give a piece of text a consistent named style in a spreadsheet?

// Reuse a saved style definition to keep text formatting uniform across a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
paragraph.AddElement(run);
// todo_example in cells we don't have ability to create a style
run = Api.CreateRun();
run.AddText("This is a text run with its own style.");
paragraph.AddElement(run);