// Access the text area inside a shape to read or write its content in a spreadsheet.

// How do I reach the writable text area of a shape placed on a sheet in a spreadsheet?

// Open a shape's inner text area and add a paragraph to it in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = worksheet.AddShape('flowChartOnlineStorage', 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const content = drawing.GetContent();
const firstParagraph = content.GetElement(0);
firstParagraph.AddText('Hello, this is the first paragraph of the drawing content!');