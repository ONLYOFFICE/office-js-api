// Read the text alignment setting of a paragraph inside a shape in a spreadsheet.

// How do I find out how text is aligned within a paragraph in a spreadsheet?

// Verify the justification applied to a paragraph after setting it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("center");
let justification = paragraph.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + justification);
content.Push(paragraph);