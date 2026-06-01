// Read the amount of space added above a paragraph inside a shape in a spreadsheet.

// How do I check how much gap precedes a paragraph in a spreadsheet?

// Measure the top spacing of a paragraph after setting it and display the value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph.");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph2.SetSpacingBefore(1440);
content.Push(paragraph2);
let spacingBefore = paragraph2.GetSpacingBefore();
paragraph = Api.CreateParagraph();
paragraph.AddText("Spacing before: " + spacingBefore);
content.Push(paragraph);