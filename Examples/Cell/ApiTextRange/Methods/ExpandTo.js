// Join two text ranges into one in a shape on a worksheet.

// The union covers everything from the first start to the last end, including the text between them.

// Join the first and the last word and make the whole fragment italic.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello brave World");

let range = shape.GetTextRange();

let first = range.GetRange(0, 5);
let second = range.GetRange(12, 17);
let united = first.ExpandTo(second);
united.SetItalic(true);

worksheet.GetRange("A1").SetValue("ExpandTo: " + united.GetText());