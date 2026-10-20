// Make the text of a hyperlink in a shape on a worksheet italic through a text range.

// A hyperlink keeps its own runs, and the range covers exactly the text of the link.

// Take the range of the whole hyperlink text and apply italic to it.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Open ");
let hyperlink = paragraph.AddHyperlink("https://www.onlyoffice.com", "ONLYOFFICE");

let range = hyperlink.GetTextRange();
range.SetItalic(true);