// Count the total number of paragraphs inside a shape in a spreadsheet.

// How do I find out how many paragraphs are contained within a shape in a spreadsheet?

// Display the paragraph count of a shape's contents as text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("We got the first paragraph inside the shape.");
paragraph.AddLineBreak();
paragraph.AddText("Number of elements inside the shape: " + content.GetElementsCount());
paragraph.AddLineBreak();
paragraph.AddText("Line breaks are NOT counted into the number of elements.");