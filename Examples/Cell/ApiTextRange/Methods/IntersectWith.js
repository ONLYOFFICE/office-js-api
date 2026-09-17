// Take the common part of two text ranges in a shape on a worksheet.

// The result is null when the two ranges do not overlap.

// Underline the fragment that belongs to both ranges.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let first = range.GetRange(0, 8);
let second = range.GetRange(4, 11);
let common = first.IntersectWith(second);
common.SetUnderline(true);

worksheet.GetRange("A1").SetValue("IntersectWith: " + common.GetText());