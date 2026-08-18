// Add Unicode code points with exact character widths to a paragraph in a spreadsheet.

// How do I insert characters preserving their exact widths into a paragraph inside a shape in a spreadsheet?

// Add the "Widths" word to a paragraph inside a shape so that every character keeps the width specified in millimeters.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Fixed widths: ");
paragraph.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);
