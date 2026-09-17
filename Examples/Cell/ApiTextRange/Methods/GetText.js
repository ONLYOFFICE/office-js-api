// Read the text covered by a text range in a shape on a worksheet.

// The range of a whole text body returns every character it holds.

// Read the text of the range.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let text = range.GetText();

worksheet.GetRange("A1").SetValue("GetText: " + text);