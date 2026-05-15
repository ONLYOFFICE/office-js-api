// Set inner padding on all four sides of a shape in a spreadsheet.

// How do I control the space between a shape's border and its text in a spreadsheet?

// Adjust the inner margins of a shape so the text inside has breathing room in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 50 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
content.RemoveAllElements();
shape.SetVerticalTextAlign("bottom");
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is a sample text with paddings set to it. ");
paragraph.AddText("Left: 2cm, Top: 0.5cm, Right: 0.5cm, Bottom: 0.3cm");
shape.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);
content.Push(paragraph);