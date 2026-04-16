// Get the previous paragraph in a spreadsheet.

// How to get the previous paragraph from the current one in a spreadsheet.

// Add two paragraphs into the shape content then get the first one using the GetPrevious method in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
content.RemoveAllElements();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("This is the first paragraph.");
content.Push(paragraph1);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph.");
content.Push(paragraph2);
let previousParagraph = paragraph2.GetPrevious();
previousParagraph.SetBold(true);