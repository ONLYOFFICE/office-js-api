// Delete the text covered by a text range in a shape on a worksheet.

// Only the covered fragment is removed, the rest of the text stays.

// Delete the middle word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello cruel World");

let range = shape.GetTextRange();

range.GetRange(5, 11).Delete();

worksheet.GetRange("A1").SetValue("Delete: " + shape.GetTextRange().GetText());