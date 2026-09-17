// Read the end position of a text range in a shape on a worksheet.

// The end position points right after the last character of the range.

// Read where a sub-range covering the second word ends.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let word = range.GetRange(6, 11);
let end = word.GetEndPos();

worksheet.GetRange("A1").SetValue("GetEndPos: " + end);