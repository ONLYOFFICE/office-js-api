// Define font size and weight settings to apply to a paragraph of text in a spreadsheet.

// How do I configure text styling such as size and bold before adding it to a shape in a spreadsheet?

// Prepare a reusable set of text style rules and attach them to a paragraph in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 80 * 36000, 50 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
docContent.RemoveAllElements();
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
paragraph.SetTextPr(textPr);
docContent.Push(paragraph);