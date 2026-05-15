// Read the text of a paragraph inside a shape in a spreadsheet.

// How do I retrieve the plain text from a paragraph inside a shape in a spreadsheet?

// Extract the paragraph text and write it to a cell to verify the content in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText("Sample paragraph text.");
const text = paragraph.GetText();
worksheet.GetRange("A1").SetValue("Paragraph text: " + text);
