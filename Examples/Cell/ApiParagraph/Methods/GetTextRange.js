// Underline a part of a paragraph of a shape on a worksheet through a text range.

// Positions are counted from the beginning of the paragraph, the end position is excluded.

// Take the range of the first five characters of the paragraph and underline it.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = paragraph.GetTextRange(0, 5);
range.SetUnderline(true);