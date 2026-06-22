// Read the vertical text alignment of a shape in a spreadsheet.

// How do I find out whether shape text is aligned to the top, middle, or bottom in a spreadsheet?

// Retrieve the current vertical alignment of a shape's inner content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 50 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
content.RemoveAllElements();
shape.SetVerticalTextAlign("center");
let verticalAlign = shape.GetVerticalTextAlign();
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("The shape vertical text alignment is: " + verticalAlign);
content.Push(paragraph);
