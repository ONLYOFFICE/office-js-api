// Apply a set of text properties to a range at once in a shape on a worksheet.

// One call replaces several separate formatting calls.

// Apply bold and a larger font size in a single step.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let textPr = Api.CreateRun().GetTextPr();
textPr.SetBold(true);
textPr.SetFontSize(32);
range.GetRange(0, 5).SetTextPr(textPr);